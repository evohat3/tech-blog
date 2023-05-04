const router = require('express').Router();

router.get('/dashboard', async (req, res) => {
  
  res.render('dashboard', {layout: 'index'});
});

// router.get('/signup', async (req,res) => {
//   res.render('signup', {layout: 'index'});
// });


module.exports = router