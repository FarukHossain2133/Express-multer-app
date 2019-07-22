var express = require('express');
var router = express.Router();
const multer = require('multer')
const fs = require('fs')
const upload = multer({dest:'public/images/uploads'})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formsub', upload.single('meme'),(req, res, next) => {
  const newPath = `${req.file.destination}/${Date.now()}_${req.file.originalname}`;

 fs.rename(req.file.path, newPath, (err) => {
   if(err) throw err;
   res.json('file uploaded')
 })
});

router.post('/formsubArr', upload.array('meme'),(req, res, next) => {
  console.log(req.files)
  console.log('hello world')
  const newPath = `${req.file.destination}/${Date.now()}_${req.files[0].originalname}`;
  const newPath2 = `${req.file.destination}/${Date.now()}_${req.files[1].originalname}`;
  
 fs.rename(req.file.path, newPath, (err) => {
   if(err) throw err;
   res.json('file uploaded')
 })
});

router.post('/formsubArr', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]),(req, res, next) => {
  console.log(req.files)
  console.log('hello world')
  const newPath = `${req.file.destination}/${Date.now()}_${req.files[0].originalname}`;
  const newPath2 = `${req.file.destination}/${Date.now()}_${req.files[1].originalname}`;
  
 fs.rename(req.file.path, newPath, (err) => {
   if(err) throw err;
   res.json('file uploaded')
 })
});

module.exports = router;
