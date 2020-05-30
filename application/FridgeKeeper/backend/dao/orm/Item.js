
const {ITEM_TABLE} = require('../../config/DB_tables')

const {queryDB} = require('../persistance/mysqlPool')
const {queryDB1} = require('../persistance/mysqlPool')

module.exports = class{

    constructor( name, type, frozen, quantity, exp, last, img_id, user_id, household_id ){
        this.name = name
        this.type = type
        this.frozen = frozen
        this.quantity = quantity
        this.exp = exp
        this.last = last
        this.img_id = img_id
        this.user_id = user_id
        this.household_id = household_id

    }

    add(res){

        const { name, type, frozen, quantity, exp, last, img_id, user_id, household_id } = this

        console.log({ name, type, frozen, quantity, exp, last, img_id, user_id, household_id, user_id } )


        // Should validate the data at time of user input
        // This is sending a response and ending the
        // promise before the item is even added to the database

        // if(!(/^[\w]{4}-[\w]{2}-[\w]{2}$/.test(exp)))
        //
        //     return res.end('Mysql date format: yyyy-mm-dd')
        //
        // if(!(/^[\w]{4}-[\w]{2}-[\w]{2}$/.test(last)))
        //
        //     return res.end('Mysql date format: yyyy-mm-dd')

        const sql = `insert into ${ITEM_TABLE}
        ( name, type, frozen, quantity, exp, last, img_id, user_id, household_id ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`

        queryDB(sql, [ name, type, frozen, quantity, exp, last, img_id, user_id, household_id ], function (err, results) {
            if(err){
                console.log(err);
                res.end('Failed to add the item.');
            } else{
                res.end((results.affectedRows != 0) + 'ahhh');
              }
        })
    }

    delete(){}

    static showAll(res){

        const sql = `select * from ${ITEM_TABLE}`;

        queryDB1(sql, function (err, results) {
            res.send(results);
            res.end((results.length != 0) + '')
        })
    }

    static showItems(user_id, res){

        const sql = `select * from ${ITEM_TABLE} where user_id = ? and quantity > 0`

        queryDB(sql, [user_id], function (err, results) {

            console.log(results)

            res.send(results)
        })
    }
}
