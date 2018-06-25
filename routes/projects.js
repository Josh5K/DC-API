var express = require('express');  
var router = express.Router();  
var project = require('../models/project');

router.get('/:id?', function(req, res, next) {  
if (req.params.id) {  
  project.getprojectById(req.params.id, function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
      project.getAllprojects(function(err, rows) {  
if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
  project.addproject(req.body, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id', function(req, res, next) {  
  project.deleteproject(req.params.id, function(err, count) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
  project.updateproject(req.params.id, req.body, function(err, rows) {  
if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router; 