package model

import (
	"time"
)

type Item struct {
	Title   string
	Url     string
	PubDate time.Time
	Content string
}

type Feed struct {
	Url   string
	Items []Item
}
