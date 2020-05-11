const express = require('express');
const route = express.Router();
const adminData = require('../admin.json');


route.get('/', function(req, res)
{
    res.render('home', {title: "Home"});
}) 

route.post('/login', function(req, res)
{
    const username = adminData.username;
    const password = adminData.password;
    const postingUsername = req.body.username;
    const postingPassword = req.body.password;

    if(postingUsername === username && postingPassword === password)
    {
        res.redirect('/admin');
        res.header.isAdmin = true;
    }
    else
    {
        res.send('sai mat khau hay la tai khoan kiem tra lai');
        res.header.isAdmin = false;
    }
})

module.exports = route;