package handler

import (
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/nemo-omen/frosty/service"
	"github.com/nemo-omen/frosty/view/home"
)

type HomeHandler struct{}

func (h HomeHandler) HandleHomeShow(c echo.Context) error {
	rssService := service.NewRssService()
	feed := rssService.GetFeed("https://css-tricks.com/rss")
	fmt.Println(feed)
	return Render(home.Show("Jeff Caldwell"), c)
}
