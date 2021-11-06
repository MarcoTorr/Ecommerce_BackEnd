const router = require('express').Router();
const { Category } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category
router.get('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id)

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a category
router.post('/', async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id)
      CategoryData.category_name = req.body.category_name;
      CategoryData.save();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
