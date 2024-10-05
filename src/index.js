const express = require('express');
const router = require('./routes/product');
require('./db/mongoose');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(productRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`app is listing on port ${port}`);
});
