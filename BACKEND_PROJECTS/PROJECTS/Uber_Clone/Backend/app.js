const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const indexRouters = require('./routes/index.router');

app.get('/', (req, res) => {
    res.send('index');
})

module.exports = app;