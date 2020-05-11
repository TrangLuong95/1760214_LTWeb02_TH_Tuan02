const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const Home = require('./routers/home.router');
const Register = require('./routers/register.router');
const Admin = require('./routers/admin.router');
const Config = require('./routers/config.router');
const Profile = require('./routers/profile.router');

app.engine('hbs', exphbs({
    layoutsDir: 'views/_layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }))

app.use('/', Home);
app.use('/reg.html', Register);
app.use('/admin', Admin);
app.use('/config', Config);
app.use('/profile', Profile);

// app.use('/', require('./routes/home.router'));

app.use(function (req, res) {
  res.render('404', { layout: false });
})

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
})