function connect() {
  const socket = new WebSocket('ws://localhost:1323/livereload')

  socket.addEventListener('open', (event) => {
    console.log('socket connected');
  })
  
  socket.addEventListener('close', (event) => {
    console.log('socket disconnected, reconnecting');    
    setTimeout(() => {
      connect()
    }, 500)
  })

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log(message);
    if(message.type === 'file_change') {
      socket.close();
      location.reload();
    }
  })
}

connect();