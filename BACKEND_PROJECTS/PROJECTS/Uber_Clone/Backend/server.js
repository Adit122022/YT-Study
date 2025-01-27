
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
// const connect = require('./src/db/db');

// connect();
 const server = http.createServer(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Server is listening on port 3000
});