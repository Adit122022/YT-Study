const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;