package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/nemo-omen/frosty/filewatcher"
)

var (
	upgrader  = websocket.Upgrader{}
	watchDirs = []string{"./static", "./static/css", "./static/js"}
)

func connectWs(c echo.Context) error {
	ws, err := upgrader.Upgrade(c.Response(), c.Request(), nil)
	if err != nil {
		return err
	}
	defer ws.Close()

	for {
		watcher := setupWatchers(ws)
		dummyNotifier := filewatcher.NewDummyNotifier()
		wsNotifier := filewatcher.NewWsNotifier(ws)
		watcher.Register(dummyNotifier)
		watcher.Register(wsNotifier)
		watcher.Watch()

		// Write
		err := ws.WriteMessage(websocket.TextMessage, []byte("Hello, Client!"))
		if err != nil {
			c.Logger().Error(err)
		}

		// Read
		_, msg, err := ws.ReadMessage()
		if err != nil {
			c.Logger().Error(err)
			if websocket.IsCloseError(err) {
				teardownWatchers(watcher, []filewatcher.Subscriber{dummyNotifier, wsNotifier})
			}
		}

		fmt.Printf("%s\n", msg)
	}
}

func teardownWatchers(watcher *filewatcher.FileWatcher, subscribers []filewatcher.Subscriber) {
	for _, s := range subscribers {
		watcher.Deregister(s)
	}
}

func setupWatchers(conn *websocket.Conn) *filewatcher.FileWatcher {
	watcher := filewatcher.NewFileWatcher(&watchDirs)
	return watcher
}

func main() {
	app := echo.New()
	app.Use(middleware.Static("./static"))
	app.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, world!")
	})

	app.GET("/livereload", connectWs)
	app.Logger.Fatal(app.Start(":1323"))
}
