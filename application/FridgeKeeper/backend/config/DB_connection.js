const LIMIT = 50
const HOST = 'localhost'
const PORT = 3306
const USER = 'root'
const PASSWORD = process.env.NODE_ENV === 'test' ? '1' : ''
const DATABASE = 'test1'

// const PASSWORD =  'password'
// const DATABASE = 'fk'


module.exports = {
    LIMIT,
	HOST,
  	PORT,
  	USER,
  	PASSWORD,
  	DATABASE
}
