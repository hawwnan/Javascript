// let number = 10;
// if(number % 2 === 0){
//     console.log(`number : ${number} is even`);
// } else {
//     console.log(`number : ${number} is odd`);
// }

// let age = 20;
// age > 18 ? console.log('adult') : console.log('not adult');

// let number = prompt('Enter a number here : ');
// if(number % 5 === 0){
//     console.log(`number : ${number} is a multiple of 5`);
// } else {
//     console.log(`number ${number} is not a multiple of 5`);
// }

let marks = (prompt('Enter the marks here : '));
console.log(marks)
if (0 <= marks && marks <= 49){
    console.log(`the grade at marks : ${marks} is : F`);
} else if (50 <= marks && marks  <= 59) {
    console.log(`the grade at marks : ${marks} is : D`);
} else if (60 <= marks && marks  <= 69) {
    console.log(`the grade at marks : ${marks} is : C`);
} else if (70 <= marks && marks  <= 79) {
    console.log(`the grade at marks : ${marks} is : B`);
} else {
    console.log(`the grade at marks : ${marks} is : A`);
}