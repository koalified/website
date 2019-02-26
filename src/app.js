'use strict';

let express = require('express');
let app = express();

let router = require('./api/api.js');
app.use(router);

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
