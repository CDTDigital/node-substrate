'use strict';

const env         = require('./server/config/env.js');

const fs          = require('fs');
const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const passport    = require('passport');
const jwtStrategy = require('./server/config/jwt-strategy');

const layout      = fs.readFileSync(__dirname + '/server/templates/layout.html').toString();
let   server      = express();

passport.use(jwtStrategy);
server.use(passport.initialize());
server.use(bodyParser.json());

server.port = env.port;
server.environment  = env.env;

server.use(express.static('public'));
server.get('/', (req, res) => {
  res.send(layout);
});

module.exports = server;
