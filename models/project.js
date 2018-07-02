var db = require('../dbconnection');

var project = {  
    getAllprojects: function(callback) {  
return db.query("select * from projects", callback);  
    },  
    getprojectById: function(id, callback) {  
return db.query("select * from projects where Id=?", [id], callback);
    },  
    addproject: function(project, callback) {  
return db.query("Insert into projects (name) values(?)", [project.name], callback);  
    },  
    deleteproject: function(id, callback) {  
return db.query("delete from projects where Id=?", [id], callback);  
    },  
    updateproject: function(id, project, callback) {  
return db.query("update projects set name=?,description=?,repository=?,startdate=?,enddate=? where Id=?", [project.name, project.description, project.repository, project.startdate, project.enddate], callback);  
    }  
};  
module.exports = project;