var express = require('express');  
var router = express.Router();  
var User = require('../models/user');

//Start GET
router.get('/', function(req, res, next) {  
      User.getAllusers(function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
});
router.get('/id/:id', function(req, res, next) {   
    User.getuserById(req.params.id, function(err, rows) {  
  if (err) {  
                  res.json(err);  
              } else {  
                  res.json(rows);  
              }  
          });  
  });
router.get('/name/:username', function(req, res, next) {   
    User.getuserByName(req.params.username, function(err, rows) {  
  if (err) {  
                  res.json(err);  
              } else {  
                  res.json(rows);  
              }  
          });
  });
//End GET  

//Start POST
router.post('/', function(req, res, next) {  
  User.adduser(req.body, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});
//End POST

//Start DELETE
router.delete('/:id', function(req, res, next) {  
  User.deleteuser(req.params.id, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});
//End DELETE

//Start PUT
router.put('/:id', function(req, res, next) {  
  User.updateuser(req.params.id, req.body, function(err, rows) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});
//End PUT
  
module.exports = router; 