const {queryDB} = require('../persistance/mysqlPool')
const {USER_TABLE} = require('../../config/DB_tables')

module.exports = class{

    constructor( name, username, email, password, birth, household_id ){

        this.username = username
        this.name = name
        this.email = email
        this.password = password
        this.birth = birth
        this.household_id = household_id

    }

    add(res){

        const { name, username, email, password, birth, household_id } = this

        if(!(/^[\w]{4}-[\w]{2}-[\w]{2}$/.test(birth)))

            return res.end('Mysql birth format: yyyy-mm-dd')


        const sql = `insert into ${USER_TABLE}
        ( name, username, email, password, birth, household_id ) values (?, ?, ?, ?, ?, ?)`

        queryDB(sql, [ name, username, email, password, birth, household_id ], function (err, results) {
            if(err){
                if(err.errno == 1062)
                    res.write('Account does exist. ')
                res.write('error:' + err)
                res.write('\ndata received : ' + JSON.stringify({name, username, email, password, birth, household_id}))
                res.end('\nFailed to create the account.')
            }
            else{
                res.end((results.affectedRows != 0) + '')
            }
        })
    }

    delete(){}

    update(res){

        const { name, username, email, password, birth, household_id } = this

        if(!(/^[\w]{4}-[\w]{2}-[\w]{2}$/.test(birth)))
        
            return res.end('Mysql date format: yyyy-mm-dd')

        const sql = `UPDATE ${USER_TABLE} SET name = ?, email = ?, password = ?, birth = ?, household_id = ? where username = '${username}'`

        queryDB(sql, [ name, email, password, birth, household_id ], function(err, results){
            res.end((results.affectedRows != 0) + '')
        })
    }

    static has(username, res){

        const sql = `select username from ${USER_TABLE} where username = ?`

        queryDB(sql, [username], function (err, results) {
            res.end((results.length != 0) + '')
        })
    }

    static get(username, password, res){

        const sql = `select id from ${USER_TABLE} where username = ? && password = ?`
        
        queryDB(sql, [username, password], function (err, results) {
            res.send(results)
        })
    }

}