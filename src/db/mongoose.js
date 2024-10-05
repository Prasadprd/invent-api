const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/inventory-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => console.log('connot connect to database'));
