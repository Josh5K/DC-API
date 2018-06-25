var express = require('express');  
var router = express.Router();  
var User = require('../models/user');

router.get('/:id?', function(req, res, next) {  
if (req.params.id) {  
  User.getuserById(req.params.id, function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
      User.getAllusers(function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
  User.adduser(req.body, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id', function(req, res, next) {  
  User.deleteuser(req.params.id, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
  User.updateuser(req.params.id, req.body, function(err, rows) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router; 