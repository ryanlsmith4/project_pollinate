// This is the express object we are building this app in express
// A framework that makes developing easier
const express = require('express');

// The express object
const app = express();

// The Port we are using.. Be it in dev/production
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
