const router = require('express').Router();
const { Tag } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const TagData = await Tag.findAll();
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Tag
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id)

    if (!TagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Tag
router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.create(req.body);
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Tag
router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id)
      TagData.tag_name = req.body.tag_name;
      TagData.save();
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
