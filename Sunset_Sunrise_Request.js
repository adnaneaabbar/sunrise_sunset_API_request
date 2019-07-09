const request = require('request');

console.log("  =============================");
console.log("\t  IN MORROCO: ");
console.log("  =============================");

var lat = 31.1728205; 
var lng = -7.3362482; 

request("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng + "&date=today", function (error, response, body) {
  if(!error & response.statusCode==200){
    var parsedData = JSON.parse(body);  
    for (var key in parsedData["results"]) {
            console.log("  ||  " + key + " : " + parsedData["results"][key]);  
    }
  }
});
