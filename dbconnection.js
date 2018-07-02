var mysql = require('mysql');  
var connection = mysql.createPool({  
    host: '192.168.64.2',
    //port: '8080',  
    user: 'root',  
    password: '',  
    database: 'DevelopersClub'  
});  
module.exports = connection;  
