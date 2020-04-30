var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/products', function(req,res){
  res.send('Hello World!')
})

router.post('/products', function(req,res){
  res.send('Get a POST request')
})

router.put('/products', function(req,res){
  res.send('Got a PUT request at /user')
})

router.delete('/products', function(req,res){
  res.send('Got a DELETE request at /user')
})

module.exports = router;
