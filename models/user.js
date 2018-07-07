var db = require('../dbconnection');
var helpers = require('../helpers/js/commonhelpers');
var bcrypt = require('bcrypt');

var user = { 
    
    //Selects
    getAllUsers: function(callback) {  
        return db.query("SELECT users.id, users.username, users.avatar, users.datejoined, users.email, users.points FROM users;", callback);  
    },  
    getUserById: function(id, callback) {  
        return db.query("SELECT users.id, users.username, users.avatar, users.datejoined, users.email, users.points, specialty.name FROM users LEFT OUTER JOIN specialties ON users.id = specialties.userid LEFT OUTER JOIN specialty ON specialty.id = specialties.specialtyid WHERE users.id =?", [id], callback);
    },
    getUserByName: function(username, callback) {  
        return db.query("SELECT users.id, users.username, users.avatar, users.datejoined, users.email, users.points, specialty.name FROM users LEFT OUTER JOIN specialties ON users.id = specialties.userid LEFT OUTER JOIN specialty ON specialty.id = specialties.specialtyid WHERE users.username =?", [username], callback);
    },
    getUserProjects: function(userid, callback) {  
        return db.query("SELECT usersprojects.userid, usersprojects.projectid, projects.name, projects.description, usersprojects.datejoined, users.username, usersprojects.role, projects.startdate, projects.enddate FROM usersprojects LEFT OUTER JOIN users ON usersprojects.userid = users.id LEFT OUTER JOIN projects ON projects.id = usersprojects.projectid WHERE usersprojects.userid = ?", [userid], callback);
    },
    getUserProjectsByName: function(name, userid, callback) {  
        return db.query("SELECT usersprojects.userid, usersprojects.projectid, projects.name, usersprojects.datejoined, users.username FROM usersprojects LEFT OUTER JOIN users ON usersprojects.userid = users.id LEFT OUTER JOIN projects ON projects.id = usersprojects.projectid WHERE usersprojects.userid = ? AND projects.name = ?", [userid, name], callback);
    },
    getUserLoginValidation: function(username, callback) {
        return db.query("SELECT password FROM users WHERE username =?",[username], callback)
    },
    getUserSearchResults: function(query, callback) {
        return db.query("SELECT id, username, avatar, datejoined, email, points FROM users WHERE username LIKE %?% AND email LIKE %?%", [query, query], callback);
    },
    getUserByRole: function(role, callback) {
        return db.query("SELECT users.id, users.username, users.avatar, users.datejoined, users.email, users.points usersprojects.role FROM users, usersprojects WHERE user.id = usersprojects.userid AND usersprojects.role =?", [role], callback);   
    },
    getUserSpecialties: function(id, callback) {
        return db.query("SELECT name FROM specialty, specialties WHERE specialties.userid = ? AND specialty.id = specialties.specialtyid;", [id], callback)
    },
    //Inserts
    addUser: function(user, callback) {  
        bcrypt.hash(user.password, saltrounds = 10, function (err, res) {
            if(err) {
                return "There was an error creating the user.";
            }
            else {
                return db.query("Insert into users (username, email, password) values(?,?)", [user.username, user.email, res], callback);
            }
        });  
    },  
    //Updates
    updateAvatar: function(id, user, callback) {  
        return db.query("UPDATE users SET avatar=? WHERE id=?", [user.avatar, id], callback);  
    },
    updatePassword: function(id, user, callback) {
        bcrypt.hash(user.password, saltrounds = 10, function (err, res) {
            if(err) {
                return "There was an error updating the user password.";
            }
            else {
                return db.query("UPDATE users SET password=? WHERE Id=?", [res, id], callback); 
            }
        });
    },
    updateSessionID: function(username, sessionid, callback) {
        return db.query("UPDATE users SET sessionid=? WHERE username=?", [sessionid, username], callback); 
    },
    //Deletes
    deleteUser: function(id, callback) {  
        return db.query("delete from users where Id=?", [id], callback);  
    }, 
};  
module.exports = user; 