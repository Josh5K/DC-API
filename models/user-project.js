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
    }
};
  
module.exports = userproject;
