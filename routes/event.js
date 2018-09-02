var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var jwt = require('jsonwebtoken');

router.get('/showEvents', isValidToken, function(req, res){
    Event.find(function(err, data){
        if(err)
        console.log(err)
        else if(data){
            console.log(data)
            res.send(data)
        }
    })
    // res.send('event get')
})

router.post('/addEvent', isValidToken, function(req, res){
    console.log(req.body);
    let event = new Event({
        eventName: req.body.eventName,
        eventOrganiser: req.body.eventOrganiser,
        eventTime: req.body.eventTime,
        eventLocation: req.body.eventLocation
    })
    console.log(event)
    event.save(function(err, result){
        if(err) console.log(err);
        else if(result._id){
            res.json( {message: 'Event Saved.', type: 'success'} );
        }
    })
    // res.send('add event post route');
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