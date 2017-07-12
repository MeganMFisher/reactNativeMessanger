const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      http = require('http'),
      io = require('socket.io')(server, { serveClient: false }),
      cors = require('cors')

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var port = 3000;

var app = express()
var server = http.Server(app);
app.use(bodyParser.json())
app.use(cors())

const controller = require('./controller.js')


app.get('/api/messages/', controller.getAllMessages)
app.post('/api/message/', controller.createMessage)

// sockets setup 

// io.on('connection', socket => {
//   console.log('A user connected')

//   socket.on('user_connected', data => {
//     socket.broadcast.emit('user_connected', { data })
//     socket.emit('user_connected', { data })
//   })

//   socket.on('chat_message', data => {
//     controller.createMessage(app, data).then(resp => {
//       socket.broadcast.emit('chat_message', data)
//       socket.emit('chat_message', data)
//     })
//       .catch(err => {
//         socket.emit('error', err.message)
//       })
//     console.log(data)

//   })

//   socket.on('chat', data => {
//     socket.broadcast.emit('chat', data);
//   })

//   //Send a message after a timeout of 4seconds
//   setTimeout(function () {
//     socket.send('Sent a message 4seconds after connection!');
//   }, 4000);
// });



app.listen(port, function() {
  console.log("Started server on port", port);
});
