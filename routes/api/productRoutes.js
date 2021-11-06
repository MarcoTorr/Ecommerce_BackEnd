const router = require('express').Router();
const { Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const ProductData = await Product.findAll();
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Product
router.get('/:id', async (req, res) => {
  try {
    const ProductData = await Product.findByPk(req.params.id)

    if (!ProductData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Product
router.post('/', async (req, res) => {
  try {
    const ProductData = await Product.create({
        product_name: req.body.product_name,
        stock: req.body.stock,
        price: req.body.price,
        category_id: req.body.category_id});
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Product
router.delete('/:id', async (req, res) => {
  try {
    const ProductData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ProductData = await Product.findByPk(req.params.id)
      ProductData.product_name = req.body.product_name;
      ProductData.stock = req.body.stock;
      ProductData.price = req.body.price;
      ProductData.category_id = req.body.category_id;
      ProductData.save();
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
