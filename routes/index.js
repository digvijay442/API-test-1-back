var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/showEvents',isValidToken, function(req, res, next){
  res.send('show events get requests received');
})

router.post('/addEvent',isValidToken, function(req, res, next){
  res.send('add event post requests received');
})

decodedToken = '';
function isValidToken(req, res, next){
  let token = req.query.tokenKey;
  console.log('token')
  console.log(token)
  jwt.verify(token, 'secret_hlfdjlsdkfj', function(err, tokenData){
    if(err){
      res.status(501).json({message: 'Unauthorized request.'})
    }
    if(tokenData){
      console.log('tokendata---')
      console.log(tokenData)
      decodedToken = tokenData;
      next();
    }

  })
}

module.exports = router;
