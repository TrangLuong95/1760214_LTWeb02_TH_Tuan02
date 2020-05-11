const express = require('express');
const route = express.Router();


route.get('/', function(req, res)
{
    res.render('admin/admin', {title: "admin"});
}) 

module.exports = route;