const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('home', {layout: 'index'});
});

router.get('/signup', async (req,res) => {
  res.render('signup', {layout: 'index'});
});


module.exports = router