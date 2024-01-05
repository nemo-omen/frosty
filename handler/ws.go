package handler

import (
	"fmt"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
	"github.com/nemo-omen/frosty/filewatcher"
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
		"./view/component",
	}
)

type WsHandler struct{}

func (h WsHandler) HandleConnectWs(c echo.Context) error {
	ws, err := upgrader.Upgrade(c.Response(), c.Request(), nil)
	if err != nil {
		return err
	}
	defer ws.Close()

	for {
		watcher := setupWatchers(ws)
		// dummyNotifier := filewatcher.NewDummyNotifier()
		wsNotifier := filewatcher.NewWsNotifier(ws)
		templateNotifier := filewatcher.NewTemplateNotifier()
		// watcher.Register(dummyNotifier)
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