'use strict';

let express = require('express');
let app = express();
let path = require('path')
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(router);
app.use('/public', express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

module.exports = {
  start: (port) => {
      app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server is up on port', port);
      });
  },

  stop: () => {
    app.close( () => {
      console.log('Server has been stopped');
    });
  },

  server:app,
};
