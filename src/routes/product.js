const express = require('express');

const Product = require('../models/Product');

const router = new express.Router();

router.post('/product', async (req, res) => {
  const product = new Product(req.body);
  console.log(product);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/product', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/product/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/product/:id', async (req, res) => {
  const _id = req.params.id;
  const allowedUpdates = ['name', 'quantity', 'price', 'unit'];
  const requestedUpdates = Object.keys(req.body);
  const isNotValidUpdate = requestedUpdates.every((update) => !allowedUpdates.includes(update));
  if (isNotValidUpdate) {
    return res.status(400).send({ error: 'Invalid Update' });
  }
  try {
    const product = await Product.findOneAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(product);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(400).send({ error: 'error in updating' });
  }
});

router.delete('/product/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findByIdAndRemove(_id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
