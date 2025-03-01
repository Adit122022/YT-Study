const app = require('./src/app');
const PORT = process.env.PORT || 3000
const connect = require('./src/db/db');

connect();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Server is listening on port 3000
});