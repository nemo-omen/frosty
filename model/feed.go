package model

type Feed struct {
	Title       string
	Description string
	Link        string
	Language    string
	Image       string
	Items       []*Item
}

type FeedProps struct {
	title       string
	description string
	link        string
	language    string
	image       string
}

func NewFeed(props FeedProps) *Feed {
	return &Feed{
		Title:       props.title,
		Description: props.description,
		Link:        props.link,
		Language:    props.language,
		Image:       props.image,
	}
}
