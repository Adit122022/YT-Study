import express from 'express';
const app  = express();
import cookieParser from 'cookie-parser';
//  middelwares bhar vale
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

import authRoutes from './routes/auth.route.js'
import messagesRoute from './routes/messages.route.js'


app.use('/api/auth' , authRoutes)
app.use('/api/messages' , messagesRoute)



export default app;