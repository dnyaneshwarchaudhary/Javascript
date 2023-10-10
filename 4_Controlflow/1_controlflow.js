// <,>,<=,>=,==,!=,===
//relational operators

if (2==='2'){

    console.log('exe');
}


const userLoggedIn = true;
const debitCard = true;

// if (userLoggedIn && debitCard){

//     console.log("Allow to buy Course");

// }

//falsy

//false, 0, -0, BigInt, "", null, undefined, NaN

//truthy

// "strings", " ", [], {}, function(){}


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5??10;
// val1 = null??18;
val1 = undefined??21;

// console.log(val1);

//ternary operator

//condition ? true : false

const price = 1900;
const price2 = 200;

price >= 800 ? console.log("greater"): console.log("false");