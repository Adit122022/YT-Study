import mongoose  from "mongoose";
import config from "../config/cofig.js";

const connect = () => {
    mongoose.connect(config.MONGODB_URI) // 0.0.0.0 for localhost, DatabaseName is the name of the database
        .then(() => console.log('🐰🐼🐼MongoDB Connected...✅✅✅ ... 🐼🐼🐰'))
        .catch(err => console.log(err));
}


export default connect;