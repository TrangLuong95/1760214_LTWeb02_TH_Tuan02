const express = require('express');
const router = express.Router();


router.get('/', function(req, res)
{
    res.render('register', {title: "register"});
}) 


router.post('/', function(req, res)
{
    res.send('Welcome test te@t.c');
})

module.exports = router;