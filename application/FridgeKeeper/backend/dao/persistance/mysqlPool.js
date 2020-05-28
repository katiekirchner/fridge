const {LIMIT,HOST,PORT,USER,PASSWORD,DATABASE} = require('../../config/DB_connection')

const mysql2 = require("mysql2");

const pool = mysql2.createPool({
	connectionLimit: LIMIT,
	host: HOST,
  	port: PORT,
  	user: USER,
  	password: PASSWORD,
  	database: DATABASE
});

function testDB(){
	pool.getConnection(function(err, connection) {
  		if (err) throw err; 
  		console.log("Connected to MySQL database successfully...");
  		connection.release();
  	});
}
console.log('Testing database connection...')
testDB()


function queryDB(sql, inserts, callback){


	preparedQuery = mysql2.format(sql, inserts);

    pool.execute(preparedQuery, function (err, results, fields) {
			callback(err, results);
   	});
}


function queryDB1(sql, callback){


    pool.execute(sql, function (err, results, fields) {
			callback(err, results);
   	});
}

module.exports = {
	queryDB,
	queryDB1
}

