const mongoose = require('mongoose');
const config = require('../config/config');

const connect = () => {
    mongoose.connect(config.MONGO_URI) 
        .then(() => console.log('🐰🐼🐼MongoDB Connected...✅✅✅ ... 🐼🐼🐰'))
        .catch(err => console.log(err));
}

module.exports = connect;