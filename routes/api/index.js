const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const productTagRoutes = require('./productTagRoutes');
const tagRoutes = require('./tagRoutes');


router.use('/category', categoryRoutes);
router.use('/products', productRoutes);
router.use('/productTag', productTagRoutes);
router.use('/tag', tagRoutes);

module.exports = router;
