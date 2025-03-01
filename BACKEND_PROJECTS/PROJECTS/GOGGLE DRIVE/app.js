const dotenv= require('dotenv');
dotenv.config();
const express = require('express')
const cokkieParser = require('cookie-parser')
const userRouter =require('./routes/user.routes')
const indexRoutes = require('./routes/index.routes')
const connectToDB =require('./config/db')
connectToDB();
const app =express();
app.set('view engine', 'ejs');
app.use(cokkieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/' , indexRoutes)
app.use('/user',userRouter)

app.listen(3000,()=>{ console.log("Server started on port 3000");  })