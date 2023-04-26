const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then((categories)=>res.json(categories))
    // find all categories
    // be sure to include its associated Products
    
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req.params)
  res.json('./api/category/:id')

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const CategoryData = await Category.update(req.body,{where:{id:req.params.id}});
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryDelete = await Category.destroy({where: {id: req.params.id}})
    res.status(200).json(CategoryDelete)
  }catch (err) {
      res.status(400).json(err);}
  })
  
    

   
    
  

module.exports = router;
