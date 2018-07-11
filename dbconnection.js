var mysql = require('mysql');  
var connection = mysql.createPool({  
    host: 'localhost', 
    user: 'root',  
    password: '',  
    database: 'DevelopersClub'  
});  
module.exports = connection;  
