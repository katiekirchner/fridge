
const {SHOPPINGLIST_TABLE} = require('../../config/DB_tables')
const {queryDB} = require('../persistance/mysqlPool')


module.exports = class{

    constructor( user_id, name, quantity_needed, image){

        this.user_id = user_id
        this.name = name
        this.quantity_needed = quantity_needed
        this.image = image

    }

    add(res){

        const { user_id, name, quantity_needed, image} = this

        const sql = `insert into ${SHOPPINGLIST_TABLE}
                    ( user_id, name, quantity_needed, image )
                     values (?, ?, ?, ?)`

        queryDB(sql, [ user_id, name, quantity_needed, image], function (err, results) {
            // res.send(results)
            if(err)
                console.log(err)
        })
    }





   static showlist(user_id, res){

      const sql = `select * from ${SHOPPINGLIST_TABLE} where user_id = ? and quantity_needed > 0`

      queryDB(sql, [user_id], function (err, results) {

        console.log(results)

        res.send(results)
      })
    }
}
