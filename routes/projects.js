var express = require('express');
var router = express.Router();
var project = require('../models/project');

router.get('/:id?', function (req, res, next) {
    if (req.headers['id'] != null) {
        project.getprojectById(req.headers['id'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } 
    else if (req.headers['name'] != null) {
        project.getprojectByName(req.headers['name'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if (req.headers['description'] != null) {
        project.getprojectByDescription(req.headers['description'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if (req.headers['repository'] != null) {
        project.getprojectByRepository(req.headers['repository'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if (req.headers['startdate'] != null) {
        project.getprojectByStartDate(req.headers['startdate'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if (req.headers['enddate'] != null) {
        project.getprojectByEndDate(req.headers['enddate'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else if (req.headers['lastactive'] != null) {
        project.getprojectByLastActive(req.headers['lastactive'], function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        project.getAllprojects(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {
    project.addproject(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0  
        }
    });
});
router.delete('/:id', function (req, res, next) {
    project.deleteproject(req.headers['id'], function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count); 
        }
    });
});
router.put('/:id', function (req, res, next) {
    project.updateproject(req.headers['id'], req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router; 