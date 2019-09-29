const sequelize = require('sequelize')

const db = new sequelize('minor' , 'root' , '' , {
    host : 'localhost',
    dialect : 'mysql'
})

const notice = db.define('notifications' , {


    heading: {type : sequelize.STRING} , 

    content:{

        type : sequelize.STRING , 
        defaultValue : 'NOTICE'
        

    },
})

db.sync()
.then(() => {
    console.log("Database created successfully")
})
.catch((err) => {
    console.log(err)
})

exports = module.exports = {
   notice
}