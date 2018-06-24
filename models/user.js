var db = require('../dbconnection');
var User = {  
    getAllUsers: function(callback) {  
return db.query("select * from users", callback);  
    },  
    getUserById: function(id, callback) {  
return db.query("select * from users where Id=?", [id], callback);
    },  
    addUser: function(User, callback) {  
return db.query("Insert into users values(?,?)", [User.username, User.avatar], callback);  
    },  
    deleteUser: function(id, callback) {  
return db.query("delete from users where Id=?", [id], callback);  
    },  
    updateUser: function(id, User, callback) {  
return db.query("update users set username=?,avatar=? where Id=?", [User.username, User.avatar, id], callback);  
    }  
};  
module.exports = User; 