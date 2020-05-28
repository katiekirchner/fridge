const User = require('../dao/orm/User')

function createUser (req, res){
    const {name, username, email, password, birth, household_id} = req.body
	new User(name, username, email, password, birth, household_id).add(res)
}

function changeUser(req, res){
    const {name, username, email, password, birth, household_id} = req.body
	new User(name, username, email, password, birth, household_id).update(res)
}

module.exports = {
    createUser,
    changeUser
}