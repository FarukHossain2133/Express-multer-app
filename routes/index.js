var express = require('express');
var router = express.Router();
const multer = require('multer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formsub',(req, res, next) => {
  res.json(req.body)
})

module.exports = router;
