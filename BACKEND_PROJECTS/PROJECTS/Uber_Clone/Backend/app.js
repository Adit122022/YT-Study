const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const connect = require('./db/db');

connect();

const userRoutes = require('./routes/user.routes');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users" , userRoutes)

module.exports = app;