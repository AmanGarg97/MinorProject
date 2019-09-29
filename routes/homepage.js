const route = require('express').Router();
const notice = require('../db').notice


// let todos = [
    
//         {task: "Do Code" , value: "done"},
//         {task: "Go to Market" , value: "done"},
//         {task: "Revise" , value: "not done"},
//         {task: "See Events" , value: " not done"}


    
// ]

route.post('/', (req, res) => {
    // We expect the req to have notice in it
    // We will create a new notice
    console.log(req.body.heading)
    notice.create({
        heading : req.body.heading,
        content : req.body.content
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new notice"
        })
    })
})

route.get('/', (req, res) => {
    // We want to send an array of all notices
    // From our database here

    notice.findAll()
        .then((notices) => {
            res.status(200).send(notices)
            
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive notices"
            })
        })

})



module.exports = route;