const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/dashboard',  async (req, res) => {
  
  res.render('dashboard', {layout: 'index'});
});

// router.get('/signup', async (req,res) => {
//   res.render('signup', {layout: 'index'});
// });


module.exports = router