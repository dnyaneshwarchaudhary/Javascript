// filter 

// const myNums = [1,2,4,6,37,83,15,5];

// const newNums = myNums.filter((num)=> num>4)

// const newNums = [];

//using for each loop

// myNums.forEach(element => {
//     if (element>4){
//         newNums.push(element)
//     }
// });
// console.log(newNums);


// maps filter

const myNums = [1,2,4,6,37,83,15,5];

const newNums = myNums.map((num)=>(num * 10)).map((num)=>(num + 1))
                .filter((num)=>num>=40);

console.log(newNums);