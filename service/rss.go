package service

import (
	"github.com/mmcdole/gofeed"
	"github.com/nemo-omen/frosty/model"
)

type RssService struct {
	Feeds  []*model.Feed
	Parser *gofeed.Parser
}

func NewRssService() *RssService {
	return &RssService{[]*model.Feed{}, gofeed.NewParser()}
}

func (s *RssService) GetFeed(url string) interface{} {
	// func (s *RssService) GetFeed(f *model.Feed) error {
	rssfeed, _ := s.Parser.ParseURL(url)
	return rssfeed
}
