
const {RECIPEITEM_TABLE} = require('../../config/DB_tables')

const {queryDB} = require('../persistance/mysqlPool')

module.exports = class{

    constructor( itemName, quantity){

        this.itemName = itemName
        this.quantity = quantity
    }

    add(){

        const { itemName, quantity } = this

        const sql = `insert into ${RECIPEITEM_TABLE}
        ( itemName, quantity ) values (?, ?)`

        queryDB(sql, [ itemName, quantity ], function (err, results) {
            if(err) 
                console.log(err)
        })
    }
}