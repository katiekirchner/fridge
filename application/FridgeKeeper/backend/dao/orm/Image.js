const {queryDB} = require('../persistance/mysqlPool')
const fs = require('fs')

const {IMAGE_TABLE} = require('../../config/DB_tables')

module.exports = class{

    constructor( imagePath, file_name ){

        this.imagePath = imagePath
        this.file_name = file_name

    }

    add(){

        const { imagePath, file_name } = this

        const sql = `insert into ${IMAGE_TABLE}
        ( img, file_name ) values (?, ?)`
        
        queryDB(sql, [ fs.readFileSync(imagePath), file_name ], function (err, results) {
            if(err) 
                console.log(err)
        })
    }
    
    static delete(file_name){

        const sql = `delete from ${IMAGE_TABLE} where file_name = ?`

        queryDB(sql, [ file_name ], function(err, results){
            if(err) 
                console.log(err)
        })
    }

    static showImage(file_name, res){

        const sql = `select img from ${IMAGE_TABLE} where file_name = ?`

        queryDB(sql, [file_name], function (err, results) {
            if(results.length === 0)
                return res.end('false')
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(results[0].img)
        })
    }

    static showAllImage(res){

        const sql = `select img from ${IMAGE_TABLE}`

        queryDB(sql, [], function (err, results) {
            if(results.length === 0)
                return res.end('false')
            res.setHeader('Content-Type', 'image/jpeg');
            setTimeout(() => {
                results.forEach(e => res.write(e.img))
                res.end()
            }, 0);
        })
    }
}