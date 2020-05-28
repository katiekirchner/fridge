const User = require('../dao/orm/User')

function login (req, res){
	const {username, password} = req.body
	User.get(username, password, res)
}

module.exports = {
	login
}