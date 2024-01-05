package model

import "github.com/google/uuid"

// / User represents the user within the system
type User struct {
	Id              uuid.UUID
	Name            string
	Email           string
	Password        string
	IsAuthenticated bool
	Subscriptions   []*Feed
	Annotations     []*Annotation
}

// / UserSaveDTO represents the data transferred to the db
type UserSaveDTO struct {
	Id       uuid.UUID
	Name     string
	Email    string
	Password string
}

// / UserResponseDTO represents the user data sent to the client
type UserResponseDTO struct {
	Id    uuid.UUID
	Name  string
	Email string
}
