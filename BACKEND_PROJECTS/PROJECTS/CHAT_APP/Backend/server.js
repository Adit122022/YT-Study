import app from './src/app.js';
import dotenv from 'dotenv';
import connect from './src/db/db.js';

dotenv.config();
connect();

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port : ' + process.env.PORT);
})