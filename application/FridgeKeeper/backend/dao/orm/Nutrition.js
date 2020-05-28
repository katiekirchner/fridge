
const {NUTRITION_TABLE} = require('../../config/DB_tables')

const {queryDB} = require('../persistance/mysqlPool')

module.exports = class{

    constructor( item_id, date, total_calories, household_id){

        this.item_id = item_id
        this.date = date
        this.total_calories = total_calories
        this.household_id = household_id
    }

    add(){

        const { item_id, date, total_calories, household_id } = this

        if(!(/^[\w]{4}-[\w]{2}-[\w]{2}$/.test(date)))

            return res.end('Mysql date format: yyyy-mm-dd')


        const sql = `insert into ${NUTRITION_TABLE}
        ( item_id, date, total_calories, household_id ) values (?, ?)`

        queryDB(sql, [ item_id, date, total_calories, household_id ], function (err, results) {
            if(err) 
                console.log(err)
        })
    }
}