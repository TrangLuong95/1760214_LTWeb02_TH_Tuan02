const express = require('express');
const route = express.Router();

const listUserData = require('../user.json');


route.get('/', function(req, res)
{
    if(res.header.isAdmin)
    {
        return  res.render('admin/admin', 
        {
            listUserData: listUserData.user
        });
    }
    res.send('vo phan su cam vao!');
})

module.exports = route;