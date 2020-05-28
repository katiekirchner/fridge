const {queryDB} = require('../persistance/mysqlPool')

const {RECIPE_TABLE} = require('../../config/DB_tables')

module.exports = class{

    constructor( instruction, img_id){

        this.instruction = instruction
        this.img_id = img_id
    }

    add(res){

        const {instruction, img_id} = this

        const sql = `insert into ${RECIPE_TABLE}
        (instruction, img_id ) values (?, ?, ?)`

        queryDB(sql, [instruction, img_id ], function (err, results) {
            if(err)
                res.end('Failed to add the recipe.')
            else
                res.end((results.affectedRows != 0) + '')
        })
    }

    delete(){}

    update(){}

    has(){}
}