import express from 'express';
const app  = express();

//  middelwares bhar vale
app.use(express.json())
app.use(express.urlencoded({extended:true}))

import authRoutes from './routes/auth.js'

app.use('/api/auth' , authRoutes)



export default app;