package main

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/nemo-omen/frosty/handler"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	app := echo.New()
	homeHandler := handler.HomeHandler{}
	wsHandler := handler.WsHandler{}
	app.Use(middleware.Static("./static"))
	app.GET("/", homeHandler.HandleHomeShow)

	app.GET("/livereload", wsHandler.HandleConnectWs)
	app.Logger.Fatal(app.Start(":1323"))
}
