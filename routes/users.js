var express = require('express');  
var router = express.Router();
var helpers = require('../helpers/js/commonhelpers');  
var User = require('../models/user');
var bcrypt = require('./../node_modules/bcrypt');


//Start GET
router.get('/', function(req, res, next) {  
    if (req.headers['id'] != null) {  
        User.getUserById(req.headers['id'], function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }
    else if(req.headers['name'] != null) {
        User.getUserByName(req.headers['name'], function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
    else if(req.headers['query'] != null) {
        User.getUserSearchResults(req.headers['query'], function(err, rows) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
    else if(req.headers['role'] != null) {
        User.getUserByRole(req.headers['role'], function(err, rows) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } 
    else {  
        User.getAllUsers(function(err, rows) {  
            if (err) {
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
        User.getUserProjects(req.headers['id'], function(err, rows) {  
            if (err) {  
                res.json(err);  
            } 
            else {  
                res.json(rows);  
            }  
        });
    }
});

router.get('/login/', function(req, res, next) {
    if(req.headers['username'] != null && req.headers['password'] != null) {
        User.getUserLoginValidation(req.headers['username'], function(err, hash) {
            if(err) {
                return res.json(err);
            }
            else {
                console.log(req.headers['password']);
                console.log(hash.toString());
                bcrypt.compare(req.headers['password'], hash[0].password, function(err, login) {
                    if(err) {
                        return res.json("There was an error logging the user in.");
                    }
                    else if(login) {
                        helpers.generateSessionID(function (err, sessionID) {
                            if(err) {
                                return res.json("There was an error logging the user in.");
                            }
                            else {
                                User.updateSessionID(req.headers['username'], sessionID, function(err, response) {
                                    if(err) {
                                        return res.json("There was an error logging the user in.");
                                    }
                                    else {
                                        return res.json(sessionID);
                                    }
                                });
                            }      
                        });
                    }
                    else {
                        return res.json(0);
                    }
                    console.log(login);
                });
            }
        });
    }
});
//End GET  

//Start POST
router.post('/', function(req, res, next) {  
  User.addUser(req.body, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(count);
        }  
    });  
});
//End POST

//Start DELETE
router.delete('/:id', function(req, res, next) {  
    User.deleteUser(req.params.id, function(err, count) {  
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
        User.updateAvatar(req.params.id, req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } 
            else { 
                res.json(rows);  
            }  
        });
    }
    else if(req.body.password != null) {
        User.updatePassword(req.params.id, req.body, function(err, rows) {  
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