// This is the express object we are building this app in express
// A framework that makes developing easier
const express = require('express');
const exphbs = require('express-handlebars');

// The express object
const app = express();

// To use templanting engine handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// The Port we are using.. Be it in dev/production
const PORT = process.env.PORT || 3000;

const auth = require('./routes/auth');

app.use('/', auth);


app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
