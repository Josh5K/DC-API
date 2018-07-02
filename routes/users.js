var express = require('express');  
var router = express.Router();  
var User = require('../models/user');

//Start GET
router.get('/', function(req, res, next) {  
    if (req.headers['id'] != null) {  
        User.getuserById(req.headers['id'], function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }
    else if(req.headers['name'] != null) {
        User.getuserByName(req.headers['name'], function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } 
    else {  
        User.getAllusers(function(err, rows) {  
            if (err) {
                console.log();  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

router.get('/projects/', function(req, res, next) {
    if(req.headers['projectname'] != null) {
        User.getUserProjectsByName(req.headers['projectname'], req.headers['id'], function (err, rows) {
            if (err) {  
                res.json(err);  
            } 
            else {  
                res.json(rows);  
            } 
        })
    }
    else {   
        User.getuserprojects(req.headers['id'], function(err, rows) {  
            if (err) {  
                res.json(err);  
            } 
            else {  
                res.json(rows);  
            }  
        });
    }
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
        } 
        else {  
            res.json(count);  
        }  
    });  
});
//End DELETE

//Start PUT
router.put('/:id', function(req, res, next) {
    if(req.body.avatar != null)
    {  
        User.updateavatar(req.params.id, req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } 
            else { 
                res.json(rows);  
            }  
        });
    }
    else if(req.body.password != null) {
        User.updatepassword(req.params.id, req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } 
            else {  
                res.json(rows);  
            }  
        });
    }    
});
//End PUT
  
module.exports = router; 