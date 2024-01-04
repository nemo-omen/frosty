package filewatcher

import (
	"log"
	"os/exec"
	"strings"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type Subscriber interface {
	Update(msg string)
	Id() uuid.UUID
}

type WsNotifier struct {
	Conn *websocket.Conn
	id   uuid.UUID
}

type DummyNotifier struct {
	id uuid.UUID
}

type TemplateNotifier struct {
	id uuid.UUID
}

func NewDummyNotifier() *DummyNotifier {
	return &DummyNotifier{id: uuid.New()}
}

func NewWsNotifier(conn *websocket.Conn) *WsNotifier {
	return &WsNotifier{id: uuid.New(), Conn: conn}
}

func NewTemplateNotifier() *TemplateNotifier {
	return &TemplateNotifier{id: uuid.New()}
}

func (n *WsNotifier) Id() uuid.UUID {
	return n.id
}

func (n *DummyNotifier) Id() uuid.UUID {
	return n.id
}

func (n *WsNotifier) Update(msg string) {
	n.Conn.WriteJSON(map[string]string{"type": "file_change", "file": msg})
}

func (n *DummyNotifier) Update(msg string) {
	log.Println("DummyNotifier update: ", msg)
}

func (n *TemplateNotifier) Update(msg string) {
	msgComponents := strings.Split(msg, "/")
	if msgComponents[0] != "view" {
		return
	}
	fileName := msgComponents[len(msgComponents)-1]
	filenameParts := strings.Split(fileName, ".")
	extension := filenameParts[len(filenameParts)-1]
	if extension == "templ" {
		log.Println("Template updated: ", fileName)
		err := exec.Command("templ generate")
		if err != nil {
			log.Println("Error generating templates", err)
		}
	}
}

func (n *TemplateNotifier) Id() uuid.UUID {
	return n.id
}
