const {GATEWAY_PORT} = require('./backend/config/server_conf')
const router = require('./backend/models/router')
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const ITEM = require('./backend/controllers/item');
const ACCOUNT = require('./backend/controllers/account');
const USER = require('./backend/controllers/user');

app.use(cors())
app.use('/backend', router);

app.use(express.static(path.join(__dirname, 'build')));


app.listen(GATEWAY_PORT, () => console.log(`Listening on port ${GATEWAY_PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/SignUp', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/backend/items', (req, res) => {
  ITEM.showItems(req, res);
});

app.get('/backend/user', (req, res) => {
  USER.login(req, res);
});

app.post('/backend/account', (req, res) => {
  ACCOUNT.createUser(req, res);
});
