# DC-API

#Requirements
- MYSQL
- NPM

#Recommended
-     XAMPP/LAMPP
-     PostMan

#Setting up the API
1.     git clone repo

2.     cd repo

3.     npm install

4. The dbconnection.js file located in the root directory of the project may need to be modified. Check to make sure your dbconnection.js looks like the example provided below.

5.     npm start

```javascript
	var mysql = require('mysql');  
    var connection = mysql.createPool({  
        host: 'localhost', 
        user: 'root',  
        password: '',  
        database: 'DevelopersClub'  
    });  
    module.exports = connection;  
```

This will be fine for Windows and Linux. MacOS will require you to use the IP provided by LAMPP.

#Setting up the MYSQL DB
1. For Development purposes the easiest way to set up the mysql server is to use XAMPP.

3. Once XAMMP is installed start both MYSQL and Apache(Although Apache will not be neccessary in production it is required to access the phpmyadmin UI).

5. Navigate to localhost/phpmyadmin and create a new database called `developersclub`

7. Run the provided SQL file in phpmyadmin to create the required tables and load in the test data.

#Did it work?
Navigate to localhost:3000/users you should see a json file of all the users.

You can also use postman to easily send http requests for testing purposes.