// let father_age = 34
// let son_age = 23
// let sum_of_ages = father_age + son_age

// sum_of_ages--//Decrement operator
// console.log(sum_of_ages)

// //Naming Convention
// //snake Case => is_student= true, has_driving_licence
// //Camel Case => isStudent, hasDrivingLicence
// //Pascal Case => IsStudent, HasDrivingLicence

// square_of_two = 4**2

// square_of_two++ //increment operator
// square_of_two += 3

// console.log(square_of_two)

// let mod= 9 % 6

// console.log(mod)

// // operator precedence
// 3 * 4 + 2 - 6 / 2 + (8 + 1)
// 3* 4 + 2- 6 / 2 + 9
// 12 + 2 - 3 + 9
// 14  - 3 + 9
// 11 + 9
// 20

// //string
// let name= "pius"

// let num1 = 5
// let num2 = "5"   //cannot add num1 and num2 together because num1 is a number while num2 is a string.

// let sum = num1 + num2  // concatenation

// console.log(sum)

// sum = num1 + Number(num2) //Type casting

// console.log(sum) 

// //comparison operator
// 2 == 2 //equal
// 2 == 3 //not equal
// 2 =="2" // The double does not check the type => true
// 2 === "2" // The triple equal compare the type => false

// if (2 === "2"){
// console.log("Yes they are equal")
// }                                       // not equal

// // Logical Operators

// a = 12
// b = 13

// if (a === "12 && b > a"){
// console.log("Everything is true")
// }                                           //Everything has to be true before it works (AND)

// if (a === "12" || b > a){
// console.log("Everthing is true")
// }                                           //Either one has to be true for it to work (OR)

// if (!(a === "12")){
// console.log("Everything is true")
// }                                               //The ! changes true to false and vice verca (NOT)

// // The Nullish Coalescing Operator (??)

// let name = null
// let text = "john"

// let result = name ?? text

// console.log(result)

//let age = prompt("Please enter your age")

//if(age >= 18){
    console.log("You are eligible to vote")
//}

 //else if(age <=0){
    console.log("You are not yet born")
//}

//else{
    console.log("Sorry! you are not eligible to vote")
  
//}

//Terniary Operator

let age = 10;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status)

