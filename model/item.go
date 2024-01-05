package model

import (
	"time"
)

type Image struct {
	Url   string
	Title string
}

type Item struct {
	Feed        *Feed
	Title       string
	Description string
	Summary     string
	Image       *Image
	Link        string
	PubDate     time.Time
	Content     string
	Annotations []*Annotation
}
