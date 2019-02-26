'use strict';

let express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile('/Users/stariel/Coding/NSTT/koalified-website/index.html')
})


module.exports = router;