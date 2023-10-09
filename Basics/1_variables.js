const accountId = 1442522;

let accountEmail = "dnyaneshwar@gmail.com";

var accountPassword = "12345";

let accountState;

accountCity = "Nashik";


//accountId = 2; not allowed
accountEmail = "dnyaneshwar1@gmail.com";

// prefer not to use var because 
// of issue in block scope and functional scope 

//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])