package model

type Feed struct {
	Title       string
	Description string
	Link        string
	Language    string
	Image       string
	Items       []*Item
}
