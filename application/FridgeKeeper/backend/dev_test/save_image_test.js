const Image = require('../dao/orm/Image')
const path = './img/a.jpg'
const cors = require('cors');
const app = require('express')();

app.use(cors())

new Image(path, 'a').add()

app.get('/',(req, res)=>Image.showAllImage(res)).listen(80)