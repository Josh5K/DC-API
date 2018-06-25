var express = require('express');  
var router = express.Router();  
var UserProject = require('../models/user-project');

router.get('/:id?', function(req, res, next) {  
if (req.params.id) {  
    UserProject.getuserprojectById(req.params.id, function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        UserProject.getAlluserprojects(function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    UserProject.adduserproject(req.body, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id', function(req, res, next) {  
    UserProject.deleteuserproject(req.params.id, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
    UserProject.updateuserproject(req.params.id, req.body, function(err, rows) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router; 