const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql2')
const exphbs = require("express-handlebars")

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Template engine
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'entronica',
    port: 3308
})

db.connect(err => {
    if(err) {
        console.log('database connection error!!')
    } else {
        console.log('DATABASE CONNECTED!')
    }
})


app.listen(8080,() => {
    console.log('server is running!!')
})
