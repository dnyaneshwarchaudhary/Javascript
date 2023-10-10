function twonum(num1,num2){

    return num1+num2;
}

//console.log(twonum(2,3));

function calcCartPrice(...num1){ //rest operator 
    return num1
}

//console.log(calcCartPrice(200,400,500));

const user = {

    username : "dnyaneshwar",
    price : 200000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}`);
}

handleObject(user);


const myNewArray = [200,400,100,422];

function getsecondelement(getarray){
    return getarray[1]
}

console.log(getsecondelement(myNewArray));