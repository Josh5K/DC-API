const crypto = require('crypto'); 

function helpers () {}

helpers.generateSessionID = function (callback) {
    crypto.randomBytes(256, function(err, buf) { 
        if (err) {
            callback(err);
            return; 
        }
        var sha = crypto.createHash('sha256'); 
        sha.update(buf);
        callback(null, sha.digest('hex')); 
    }); 
}

helpers.isValidEmail = function (string) {
    
}

helpers.ToNum = function (string) {
    return +string;
}

helpers.Object2String = function (obj) {
    var val, output = "";
    if (obj) {    
        output += "{";
        for (var i in obj) {
            val = obj[i];
            switch (typeof val) {
                case ("object"):
                    if (val[0]) {
                        output += i + ":" + array2String(val) + ",";
                    } else {
                        output += i + ":" + object2String(val) + ",";
                    }
                    break;
                case ("string"):
                    output += i + ":'" + escape(val) + "',";
                    break;
                default:
                    output += i + ":" + val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "}";
    }
    return output;
}

helpers.array2String = function (array) {
    var output = "";
    if (array) {
        output += "[";
        for (var i in array) {
            val = array[i];
            switch (typeof val) {
                case ("object"):
                    if (val[0]) {
                        output += array2String(val) + ",";
                    } else {
                        output += object2String(val) + ",";
                    }
                    break;
                case ("string"):
                    output += "'" + escape(val) + "',";
                    break;
                default:
                    output += val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "]";
    }
    return output;
}


helpers.string2Object = function(string) {
    eval("var result = " + string);
    return result;
}

helpers.string2Array = function (string) {
    eval("var result = " + string);
    return result;
}

//Note this will have to be moved from DC-API to Angular App. Will convert to servertime instead of local time.
//All of our times should be stored in UTC this function will convert UTC date to the browsers local time.
helpers.localizeTime = function (date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

module.exports = helpers;