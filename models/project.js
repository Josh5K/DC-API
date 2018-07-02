var db = require('../dbconnection');

var project = {
    getAllprojects: function(callback) {  
        return db.query("select * from projects", callback);  
    },  
    getprojectById: function(id, callback) {  
        return db.query("select * from projects where id=?", [id], callback);
    },  
    getprojectByName: function(name, callback) {  
        return db.query("select * from projects where name=?", [name], callback);
    },  
    getprojectByDescription: function(description, callback) {  
        return db.query("select * from projects where description=?", [description], callback);
    },  
    getprojectByRepository: function(repository, callback) {  
        return db.query("select * from projects where repository=?", [repository], callback);
    },  
    getprojectByStartDate: function(startdate, callback) {  
        return db.query("select * from projects where startdate=?", [startdate], callback);
    },  
    getprojectByEndDate: function(enddate, callback) {  
        return db.query("select * from projects where enddate=?", [enddate], callback);
    },  
    getprojectByLastActive: function(lastactive, callback) {  
        return db.query("select * from projects where lastactive=?", [lastactive], callback);
    },  
    getuserByProject: function(id, callback) {
        return db.query("select username from userprojects LEFT OUTER JOIN projects ON usersprojects.projectid = project.id LEFT OUTER JOIN users ON user.id = usersprojects.userid WHERE usersprojects.projectid = ?", [id], callback);
    },
    addproject: function(project, callback) {  
        return db.query("Insert into projects (name) values(?)", [project.name], callback);  
    },  
    adduserproject: function(userproject, callback) {  
        return db.query("Insert into usersprojects (userid, porjectid) values(?,?)", [userproject.userid, userproject.projectid], callback);  
            },  
    deleteproject: function(id, callback) {  
        return db.query("delete from projects where Id=?", [id], callback);  
    },
    deleteuserproject: function(userid, projectid, callback) {  
        return db.query("delete from usersprojects where UserId=? and ProjectId=?", [userid, projectid], callback);  
    },
    updateproject: function(id, project, callback) {  
        return db.query("update projects set name=?,description=?,repository=?,startdate=?,enddate=? where Id=?", [project.name, project.description, project.repository, project.startdate, project.enddate], callback);  
    }
};  
module.exports = project;