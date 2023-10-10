const adminUser = {};

adminUser.id = "12412";
adminUser.name = "Dnyaneshwar";
adminUser.isLoggedIn = true;

//console.log(adminUser);


const regUser = {
    email : "rameshwari@gmail.com",
    fullname : {
        userFullName : {
            firstname : "Rameshwari",
            lastname : "Chaudhary"
        }
    }
}

//console.log(regUser.fullname.userFullName);

const obj1 = {1:"a",2: "b"};
const obj2 = {3: "a",4:"b"};
const obj3 = {5: "a",6:"b"};

const obj4 = Object.assign({},obj1,obj2,obj3);
//console.log(obj4);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

