package main

import (
	"fmt"
	"html/template"
	"io"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/nemo-omen/frosty/filewatcher"
	"github.com/nemo-omen/frosty/handler"
)

var (
	upgrader  = websocket.Upgrader{}
	watchDirs = []string{
		"./static",
		"./static/css",
		"./static/js",
		"./view",
		"./view/home",
		"./view/layout",
	}
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

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
		templateNotifier := filewatcher.NewTemplateNotifier()
		watcher.Register(dummyNotifier)
		watcher.Register(wsNotifier)
		watcher.Register(templateNotifier)
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
		}

		fmt.Printf("%s\n", msg)
	}
}

func setupWatchers(conn *websocket.Conn) *filewatcher.FileWatcher {
	watcher := filewatcher.NewFileWatcher(&watchDirs)
	return watcher
}

func main() {
	app := echo.New()
	homeHandler := handler.HomeHandler{}
	app.Use(middleware.Static("./static"))
	app.GET("/", homeHandler.HandleHomeShow)

	app.GET("/livereload", connectWs)
	app.Logger.Fatal(app.Start(":1323"))
}
