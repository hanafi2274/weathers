const express = require("express");
const path = require('path');
const app = express();
const appRouting = require('./routes/router');
const schedule = require('./scheduler/scheduler');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use('/assets',express.static(path.join(__dirname, 'assets')));
app.use('/', appRouting);

app.listen('20',()=> console.log('Server Running at port: 20'));

