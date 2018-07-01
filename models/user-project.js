var db = require('../dbconnection');

var userproject = {  
    getAlluserprojects: function(callback) {  
return db.query("select * from usersprojects", callback);  
    },  
    getuserprojectById: function(id, callback) {  
return db.query("select * from usersprojects where Id=?", [id], callback);
    },
    getuserprojectByUserID: function(userid, callback) {  
return db.query("SELECT usersprojects.userid, usersprojects.projectid, usersprojects.datejoined, users.username FROM usersprojects LEFT OUTER JOIN users ON usersprojects.userid = users.id LEFT OUTER JOIN projects ON projects.id = usersprojects.projectid WHERE usersprojects.userid = ?", [userid], callback);
    },
    adduserproject: function(userproject, callback) {  
return db.query("Insert into usersprojects values(?,?,?,?)", [userproject.id, userproject.userid, userproject.projectid, userproject.datejoined], callback);  
    },  
    deleteuserproject: function(id, callback) {  
return db.query("delete from usersprojects where Id=?", [id], callback);  
    },  
    updateuserproject: function(id, userproject, callback) {  
return db.query("update usersprojects set userid=?,projectid=?,datejoined=? where id=?", [userproject.userid, userproject.projectid, userproject.datejoined, id], callback);  
    }  
};
  
module.exports = userproject;
