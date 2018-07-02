var db = require('../dbconnection');

var user = { 
    
    //Selects
    getAllusers: function(callback) {  
        return db.query("select * from users", callback);  
    },  
    getuserById: function(id, callback) {  
        return db.query("select * from users where Id=?", [id], callback);
    },
    getuserByName: function(username, callback) {  
        return db.query("select * from users where username=?", [username], callback);
    },
    getuserprojects: function(userid, callback) {  
        return db.query("SELECT usersprojects.userid, usersprojects.projectid, projects.name, usersprojects.datejoined, users.username FROM usersprojects LEFT OUTER JOIN users ON usersprojects.userid = users.id LEFT OUTER JOIN projects ON projects.id = usersprojects.projectid WHERE usersprojects.userid = ?", [userid], callback);
    },
    getUserProjectsByName: function(name, userid, callback) {  
        return db.query("SELECT usersprojects.userid, usersprojects.projectid, projects.name, usersprojects.datejoined, users.username FROM usersprojects LEFT OUTER JOIN users ON usersprojects.userid = users.id LEFT OUTER JOIN projects ON projects.id = usersprojects.projectid WHERE usersprojects.userid = ? AND projects.name = ?", [userid, name], callback);
    },
    getuserpoints: function(id, callback) {
        return db.query("SELECT points from user where userid =?", [id], callback);
    },
    //Inserts
    adduser: function(user, callback) {  
        return db.query("Insert into users (username, email) values(?,?)", [user.username, user.email], callback);  
    },  
    //Updates
    updateavatar: function(id, user, callback) {  
        return db.query("update users set avatar=? where Id=?", [user.avatar, id], callback);  
    },
    updatepassword: function(id, user, callback) {  
        return db.query("update users set password=? where Id=?", [user.password, id], callback);  
    },
    //Deletes
    deleteuser: function(id, callback) {  
        return db.query("delete from users where Id=?", [id], callback);  
    }, 
};  
module.exports = user; 