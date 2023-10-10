// const chai = function (){
//     let username = "dnyaneshwar";
//     console.log(this.username);
// }

const arrow = () => {
    let username = "dnyaneshwar";
    console.log(this.username);
}
// chai()
arrow();


// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

const addTwo = (num1,num2) => (num1+num2); //implicitly call return 

console.log(addTwo(2,4));


