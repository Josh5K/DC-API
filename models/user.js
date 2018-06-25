var db = require('../dbconnection');

var user = {  
    getAllusers: function(callback) {  
return db.query("select * from users", callback);  
    },  
    getuserById: function(id, callback) {  
return db.query("select * from users where Id=?", [id], callback);
    },  
    adduser: function(user, callback) {  
return db.query("Insert into users values(?,?,?)", [user.id, user.username, user.avatar], callback);  
    },  
    deleteuser: function(id, callback) {  
return db.query("delete from users where Id=?", [id], callback);  
    },  
    updateuser: function(id, user, callback) {  
return db.query("update users set username=?,avatar=? where Id=?", [user.username, user.avatar, id], callback);  
    }  
};  
module.exports = user; 