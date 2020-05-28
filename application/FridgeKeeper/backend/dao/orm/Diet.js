const {queryDB} = require('../persistance/mysqlPool')


const {DIET_TABLE} = require('../../config/DB_tables')

module.exports = class{

    constructor( food, is_allergy, user_id ){

        this.food = food
        this.is_allergy = is_allergy
        this.user_id = user_id

    }

    add(){

        const {  food, is_allergy, user_id } = this

        const sql = `insert into ${DIET_TABLE}
        (  food, is_allergy, user_id ) values (?, ?)`
        
        queryDB(sql, [  food, is_allergy, user_id ], function (err, results) {
            if(err) 
                console.log(err)
        })
    }
    
    static delete(user_id){

        const sql = `delete from ${DIET_TABLE} where user_id = ?`

        queryDB(sql, [ user_id ], function(err, results){
            if(err) 
                console.log(err)
        })

    }

    static showDiets(user_id, res){

        const sql = `select food from ${DIET_TABLE} where user_id = ?`

        queryDB(sql, [user_id], function (err, results) {
            res.end(results)
        })
    }
}