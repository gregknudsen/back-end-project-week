const express = require('express');
const jwt = require('jsonwebtoken')
// const { makeToken } = require('./auth/jwt');
// const db = require('./_config/db');
// const setupMiddleware = require('./_config/middleware');
// const setupRoutes = require('./_config/routes');

const server = express();

server.get('/', (req, res) => {
  res.json({msg: 'you made it!'})
});

module.exports = server;