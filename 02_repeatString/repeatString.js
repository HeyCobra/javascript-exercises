const repeatString = function(string, num) {
    let string2 = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 1; i <= num; i++) {
            string2 += string
        }
    
    }
        return string2

};

// Do not edit below this line
module.exports = repeatString;
