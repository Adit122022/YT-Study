import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import connect from './src/db/db.js';

connect();

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port : ' + process.env.PORT);
})