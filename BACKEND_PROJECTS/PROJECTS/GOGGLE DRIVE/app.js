const dotenv= require('dotenv');
dotenv.config();
const express = require('express')
const userRouter =require('./routes/user.routes')
const connectToDB =require('./config/db')
connectToDB();
const app =express();
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)

app.listen(3000,()=>{ console.log("Server started on port 3000");  })