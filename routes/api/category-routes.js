const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {

});

router.get('/:id', async (req, res) => {

});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
