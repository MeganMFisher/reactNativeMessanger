const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js')
    //   cors = require('cors')

// massive(config.database).then(db => {
//     app.set('db', db)
// }).catch((err) => {
//     console.log(err)
// })

var port = 3000;

var app = express()
app.use(bodyParser.json())
// app.use(cors())

const controller = require('./controller.js')


// app.post('/api/contact', controller.postContactForm)


app.listen(port, function() {
  console.log("Started server on port", port);
});