const express = require('express');
const route = express.Router();


route.get('/', function(req, res)
{
    res.render('admin/config', {title: "config"});
}) 

module.exports = route;