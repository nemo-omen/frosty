package handler

import (
	"github.com/labstack/echo/v4"
	"github.com/nemo-omen/frosty/view/home"
)

type HomeHandler struct{}

func (h HomeHandler) HandleHomeShow(c echo.Context) error {
	return Render(home.Show("Jeff Caldwell"), c)
}
