package filewatcher

import (
	"log"
	"reflect"

	"github.com/fsnotify/fsnotify"
)

type Watcher interface {
	UpdateSubscribers()
	Register(sub *Subscriber)
	Deregister(sub *Subscriber)
}

type FileWatcher struct {
	WatchDirs   *[]string
	Subscribers []Subscriber
}

func NewFileWatcher(dirs *[]string) *FileWatcher {
	return &FileWatcher{
		WatchDirs:   dirs,
		Subscribers: []Subscriber{},
	}
}

func (w *FileWatcher) Register(s Subscriber) {
	// log.Println("Registering new subscriber", s.Id())
	for _, sub := range w.Subscribers {
		if reflect.TypeOf(sub) == reflect.TypeOf(s) {
			w.Deregister(sub)
		}
	}
	w.Subscribers = append(w.Subscribers, s)
	// log.Println("Subscriber registered: ", s.Id())
	// log.Println("Number of subscribers: ", len(w.Subscribers))
}

func (w *FileWatcher) Deregister(s Subscriber) {
	for index, notifier := range w.Subscribers {
		if notifier.Id() == s.Id() {
			w.Subscribers = remove(w.Subscribers, index)
			// log.Println("Subscriber deregistered: ", s.Id())
			// log.Println("Number of subscribers: ", len(w.Subscribers))
		}
	}
}

func (w *FileWatcher) UpdateSubscribers(filename string) {
	for _, s := range w.Subscribers {
		s.Update(filename)
	}
}

func (w *FileWatcher) Watch() {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				if event.Has(fsnotify.Write) {
					w.UpdateSubscribers(event.Name)
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println(err)
			}
		}
	}()

	for _, dir := range *w.WatchDirs {
		err = watcher.Add(dir)
		if err != nil {
			log.Fatal(err)
		}
	}

	<-make(chan struct{})
}

func remove(slice []Subscriber, index int) []Subscriber {
	return append(slice[:index], slice[index+1:]...)
}
