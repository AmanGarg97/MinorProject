const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/' , (req,res) => {
    res.send("Hey There!")
})

const notices = require('./routes/homepage.js')

app.use('/getNotice' , notices)

app.listen(2678, () => console.log("Server Started at http://localhost:2679"))