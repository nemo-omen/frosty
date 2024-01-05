package model

import "github.com/google/uuid"

type Annotation struct {
	Id       uuid.UUID
	Content  string
	Location *AnnotationLocationRange
	Item     *Item
	User     *User
}

type AnnotationLocationRange struct {
	Start *AnnotationLocation
	Stop  *AnnotationLocation
}

type AnnotationLocation struct {
	Line int
	Col  int
}
