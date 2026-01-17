const accountId  = 12345
let accountEmail = "biswajit@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2; //not allowed

accountEmail = "biswa@123";
accountPassword = "1212121";
accountCity = "Jajput";

console.log(accountId);

/* 
prefer not to user var because of 
issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])