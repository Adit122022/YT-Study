const express = require('express');
const app = express();

require('dotenv').config();
 

const authRoutes = require('./routes/auth.routes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth' , authRoutes)

module.exports = app;