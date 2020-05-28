
const {login} = require('../controllers/user')
const {createUser, changeUser} = require('../controllers/account')
const {addItem} = require('../controllers/item')
const ocrParser = require('../controllers/ocrParser')
const {addToList, deleteFromList, showShoppinglist} = require('../controllers/shoppingList')


const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/user',jsonParser, login)
router.put('/account',jsonParser, createUser)
router.post('/account',jsonParser, changeUser)

router.put('/item',jsonParser, addItem)

router.post('/ocr:ext',jsonParser, ocrParser)


router.get('/shoppingList',jsonParser, showShoppinglist)
router.put('/shoppingList',jsonParser, addToList)



module.exports = router
