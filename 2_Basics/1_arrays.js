//array

const myArr = [0,1,2,3,4,5];
 
//array methods

myArr.push(6);
myArr.pop();
console.log(myArr);

//slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3);

console.log("C",myArr);
console.log(myn2);


