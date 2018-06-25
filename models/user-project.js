var db = require('../dbconnection');

var userproject = {  
    getAlluserprojects: function(callback) {  
return db.query("select * from usersprojects", callback);  
    },  
    getuserprojectById: function(id, callback) {  
return db.query("select * from usersprojects where Id=?", [id], callback);
    },  
    adduserproject: function(userproject, callback) {  
return db.query("Insert into usersprojects values(?,?,?,?)", [userproject.id, userproject.userid, userproject.projectid, userproject.datejoined], callback);  
    },  
    deleteuserproject: function(id, callback) {  
return db.query("delete from usersprojects where Id=?", [id], callback);  
    },  
    updateuserproject: function(id, userproject, callback) {  
return db.query("update usersprojects set userid=?,projectid=?,datejoined=? where Id=?", [userproject.userid, userproject.projectid, userproject.datejoined], callback);  
    }  
};  
module.exports = userproject;