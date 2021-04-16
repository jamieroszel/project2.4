const express = require('express')
const router = express.Router()

router.get('/new', (req, res) =>{
    res.render('articles/new')
})

router.post('/', (req, res) =>{ //whenever the submit article form is used, this is the route

})

module.exports = router