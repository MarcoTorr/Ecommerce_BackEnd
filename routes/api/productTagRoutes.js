const router = require('express').Router();
const { ProductTag } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const ProductTagData = await ProductTag.findAll();
    res.status(200).json(ProductTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single ProductTag
router.get('/:id', async (req, res) => {
  try {
    const ProductTagData = await ProductTag.findByPk(req.params.id)

    if (!ProductTagData) {
      res.status(404).json({ message: 'No ProductTag found with this id!' });
      return;
    }

    res.status(200).json(ProductTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a ProductTag
router.post('/', async (req, res) => {
  try {
    const ProductTagData = await ProductTag.create({
        tag_id: req.body.tag_id,
        product_id: req.body.product_id});
    res.status(200).json(ProductTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a ProductTag
router.delete('/:id', async (req, res) => {
  try {
    const ProductTagData = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!ProductTagData) {
      res.status(404).json({ message: 'No ProductTag found with this id!' });
      return;
    }

    res.status(200).json(ProductTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ProductTagData = await ProductTag.findByPk(req.params.id)
      ProductTagData.tag_id = req.body.tag_id;
      ProductTagData.product_id = req.body.product_id;
      ProductTagData.save();
    res.status(200).json(ProductTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
