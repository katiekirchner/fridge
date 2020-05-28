
const {SHOPPINGLIST_TABLE, ITEM_TABLE} = require('../../config/DB_tables')
const {queryDB} = require('../persistance/mysqlPool')


module.exports = class{

    constructor( household_id, item, quantity_needed){

        this.household_id = household_id
        this.item = item
        this.quantity_needed = quantity_needed

        // this.date = date
    }

    add(res){

        const { household_id, item, quantity_needed} = this

        var get_id = `(select ${ITEM_TABLE}.id from ${ITEM_TABLE} where ${ITEM_TABLE}.name = '${item}')`

        const sql = `insert into ${SHOPPINGLIST_TABLE}
                    ( household_id, item_id, item, quantity_needed )
                     values (?, ${get_id}, ?, ?)`

        queryDB(sql, [ household_id, item, quantity_needed  ], function (err, results) {
            // res.send(results)
            if(err)
                console.log(err)
        })
    }

    static delete(id){

        const sql = `delete from ${SHOPPINGLIST_TABLE} where id = ?`

        queryDB(sql, [ id ], function(err, results){
            if(err)
                console.log(err)
        })

    }

    showlist(res){
      const {household_id} = this

      const sql = `select distinct shoppingList.item_id, item.name, shoppingList.quantity_needed, image.img
                    from shoppingList
                    join item on item.id = shoppingList.item_id
                    join image on image.file_name = item.name
                    where shoppingList.household_id = ${household_id}`

      queryDB(sql, [household_id], function (err, results) {
        console.log(results);

        res.json(results);
      })
    }
}
