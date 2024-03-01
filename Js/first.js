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

// let marks = (prompt('Enter the marks here : '));
// console.log(marks)
// if (0 <= marks && marks <= 49){
//     console.log(`the grade at marks : ${marks} is : F`);
// } else if (50 <= marks && marks  <= 59) {
//     console.log(`the grade at marks : ${marks} is : D`);
// } else if (60 <= marks && marks  <= 69) {
//     console.log(`the grade at marks : ${marks} is : C`);
// } else if (70 <= marks && marks  <= 79) {
//     console.log(`the grade at marks : ${marks} is : B`);
// } else {
//     console.log(`the grade at marks : ${marks} is : A`);
// }

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }
// let sum = 0;
// let number = prompt('Enter the end number : ');
// for(let i = 1; i <= number; i++){
//     sum += i;
// }
// console.log(sum)



// let student = {
//     name : 'Muhammad Hannan',
//     age : 20,
//     cgpa : 7.5,
//     isPass : true
// };

// for (let key in student){
//     console.log("key : ", key , "value : ", student[key]);
// }

// for (let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(`The number ${i} is even`)
//     }
// }

// let gameNum = 25;
// let guess = Number(prompt('Guess the number : '));
// while(guess != gameNum){
//     console.log('Not quite right, try again');
//     guess = prompt('Guess the number : ');
// }
// if(guess == gameNum){
//     console.log(`Congrats you guessed it correctly`);
// }
    
// let str = 'Muhammad Hannan';
// console.log(str[0]);

// let str = 'muhammad hannan';
// let str1 = str.toUpperCase();
// console.log(str1);

// let str3 = str1.toLowerCase();
// console.log(str3);
// let str = 'Muhammad Hannan       ';
// console.log(str.trim());

// let str1 = str.slice(2,6);
// console.log(str1);

// str = str.replace('H', 'h');
// console.log(str);

// console.log(str.charAt(2));

// let userName = prompt('Enter yor name : ');
// console.log(`@${userName}${userName.length}`); 

// let marks = [97,82,64,36];
// console.log(marks)
// console.log(marks.length);

// let heroes = ['ironman', 'thor', 'hulk', 'batman'];
// console.log(heroes);

// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }
// for(let i of marks){
//     console.log(i);
// }

// let cities = ['Lahore', 'Karachi', 'Islamabad', 'Peshawar'];
// for(let city of cities){
//     console.log(city);
//}
// let sum = 0;
// let avg;
// let marks = [85,97,44,37,76,60];
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }

// avg = sum / marks.length;
// console.log(`The average marks are : ${avg}`);

// let prices = [250,645,300,900,50];
// for(let i = 0; i < prices.length; i++){
//     prices[i] -= prices[i] * 0.10;
// }

// console.log(prices);
// let i = 0;
// for(let price of prices){
//     price = price * 0.10;
//     prices[i] = prices[i] - price;
//     i++;
// }

// console.log(prices);

// let veggies = ['tomato', 'potato', 'onion', 'carrot'];
// let marks = [97,87,77,67];
// veggies.push('tamarind', 'reddish');
// console.log(veggies);
// veggies.pop();
// console.log(veggies);
// console.log(veggies.toString());
// console.log(marks.toString());

// let marvelHeroes = ['thor', 'spiderman', 'ironman'];
// let dcHeroes = ['batman', 'superman'];
// let heroes = dcHeroes.concat(marvelHeroes);
// console.log(heroes)
// console.log(dcHeroes);

// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);
// let hero = marvelHeroes.shift();
// console.log(hero);
// console.log(marvelHeroes);

// let arr = [1,2,3,4,5,6,7,8];
// let part = arr.slice(2,5);
// console.log(part);

// arr.splice(2,2,101,102);
// console.log(arr);

// arr.splice(2, 0, 101);

// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// companies.shift();
// console.log(companies); 
// companies.splice(2,1,'Ola');
// console.log(companies);
// companies.push('Amazon');
// console.log(companies);

// function myFunction() {
//     console.log('Welcome to Js code');
// }

// myFunction();

// function Sum(num1 , num2){
//     s = num1 + num2;
//     return s;
// }

// let sum = Sum(5,2);
// console.log(sum);

// const Sum = (num1, num2) => {
//     s = num1 + num2;
//     return s; 
// }

// let sum = Sum(4,5);
// console.log(sum);

// const product = (num1,num2) => {
//     return num1 * num2;
// }

// product(5,6);

// function countVowels(string){
//     let count = 0;
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' ||  string[i] === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let count = countVowels('Hannan');
// console.log(count);


// countVowel = (string) => {
//     let count = 0;
//     for(let ch of string){
//         if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowel('Hannan'));

// let str = 'Muhammad Hannan';
// for(let val of str){
//     console.log(val);
// }
// let veggies = ['tomato', 'potato', 'onion', 'carrot'];

// let arr = [1,2,3,4,5];
// veggies.forEach((val , idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })
// let calSquare = (val) => {
//     console.log(`The square of number ${val} is : ${val * val}`);
// }

// let numbers = [2,3,4,5,6,7];
// numbers.forEach(calSquare)

// let newArr = numbers.map((val) => {
//     return val % 2 === 0;
// })

// let newArray = numbers.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(newArr);
// console.log(newArray);
// console.log(numbers);

// let output = numbers.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })

// console.log(output);

// let marks = [60, 80, 90, 96, 91, 88, 82];
// let students = marks.filter((val) => {
//     return val >= 90;
// })

// console.log(students);
// let array = [];
// let number = prompt('Enter the number here : ');
// for(let i = 1; i <= number; i++){
//     array.push(i);
// }

// let sum = array.reduce((prev, curr) => {
//     return prev + curr;
// })

// let pro = array.reduce((prev, curr) => {
//     return prev * curr;
// })

// console.log(`The sum is : ${sum} and the product is : ${pro}`);
