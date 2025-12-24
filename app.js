/*==================================== Question No 1 =========================================
call() 
we create a normal function and pass agruments and receive in its parmaeter and use it. 
in call() we make an object and save object in varaible and write some properities and 

vales inside object 
now when we call out function after funciton name we write call() and inside call paramete 
firts we write the name of object and after writing object name we pass our another arguments and 
the properities of object we use in our funciton by this.property . it is used in oop not in 
funcitonal programming but for interview is necessary its concept
======================================= Answer =====================================*/
//  function greeting(name,age){
//   console.log(`My name is ${name}, and i am ${age} years old and my city is ${this.city}`)
// }

// const place = {
//   city: 'Karachi'
// }

// greeting.call(place,'Aziz',30)
       
// function greeting(name,age)
// {
//     console.log(`My name is ${name} and my age is ${age} years and 
//         my city is ${this.city}`)
// }

// const place = {
//     city : 'Karachi'
// }
// greeting.call(place,'Aziz',20)


// example 2
// function info(name,designation){
//     console.log(`My name is ${name} and i am ${designation}, My city is ${this.city} and my province is ${this.province} `)

// }
// const details = {
//     city : 'Karachi',
//     province : 'Punjab'
// }

// info.call(details,'Aziz','developer')

/*==================================== Question No 2 =========================================
apply() 
call and apply are same only having one main difference 
in call parameter first we pass object name and after the name of our another argument by comma but 
in apply() first we pass object name and after passing object name we write , and another agrguments 
we pass inside an array [] , this is only one difference b/w call and apply
======================================= Answer =====================================*/
// function info(name,age){
//     console.log(`My name is ${name},my age is ${age} and my city is ${this.city} 
//         and my province is ${this.province}`)

// }

// const obj = {
//     city :'Karachi',
//     province : 'pb'
// }
// info.apply(obj,['Aziz',30])
/*==================================== Question No 3 =========================================
bind is also like call but when we call bind it does not reply us we have to save it first in 
a varialbe and than we can get reply and in bind paramter we pass first object name and than pass 
another agruments  by comma not in an arry like apply

call() 
we pass 1st object name and after we pass another argumetns by comma 
apply()
we pass 1st object name and than , and inside an array we pass another agruments 
bind()
we pass first object name and than we pass another arguments by comma not in an array 
and to get response of bind first we have to stroe bind in a varible and than we call variable like ans() and than 
we can get the answer of bind.
======================================= Answer =====================================*/
// function info(name,age){
//     console.log(`My name is ${name} and my age is ${age}, my city is ${this.city} and 
//         my province is ${this.province}`)
// }
// const obj = {
//     city : 'kci',
//     province : 'Punjab'
// }

// let ans = info.bind(obj,'Aziz',30);
// ans()
/*==================================== Question No 4 =========================================
date topic 
we use new keyword in date because Date() type is string and we can not get out values of string 
until we convert string to an object , to get values like hours, minutes, months we use new keyword 
before Date() and date type converts string to object 
======================================= Answer =====================================*/
// var date = new Date();
// console.log(date,typeof date)
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString())
// const birthDay = new Date('08 july 1997');
// console.log(birthDay)

// var date = new Date();
// date.setMonth(6)
// console.log(date)
// date.setFullYear(1900);
// console.log(date)
// date.setDate(30)
// console.log(date)
// date.setFullYear(8)
// console.log(date)
// date.setMinutes(10)
// console.log(date)
/*==================================== Question No 5 =========================================
string : 
any thing that is written inside '' is called string like 'stri23', 'aziz' etc
======================================= Answer =====================================*/
// var name = 'Aziz'
// var age = '23years'
// any thing that we see written inside quotation marks is called string
/*==================================== Question No 6 =========================================
Numbers 
the number that we use in Mathematics like 23,4,55,6,6 are called numbears numbers are not written inside ''
======================================= Answer =====================================*/

// let number = 342525
// let num = 23



/*==================================== Question No 7 =========================================
data : 
information related to a person or thing is called data , data is information about person or thing 
we store data in varibale and object 
======================================= Answer =====================================*/
// let name = 'Aziz',
// name is also a data it shows name information


/*==================================== Question No 8 =========================================
variale 
a variable is like a constainer and it is used  to store data or infomation, like glass is a container and water 
we put inside it is data or infomation 
variable are containers that are used to store data or information
======================================= Answer =====================================*/
// let name = 'Aziz';
// let age  = 23;

/*==================================== Question No 9 =========================================
var 
var is a reserved keyword of js that is used to create variables, let and const are also keywords 
that are used to creating varibles. we can not write var capitalized ,var ,let and const are always written in lowerCase
======================================= Answer =====================================*/
// var name = 'Aziz';
// let name = 'Aziz';
// const name = 'Aziz';


/*==================================== Question No 10 =========================================
overwriting of varialbe
======================================= Answer =====================================*/
// var name = 'Aziz';
// name = 'Umair';
// name = 'Pervaiz'
// let name = 'Aziz';
// name = 'Pervaiz';
// const age = 30;
// age = 31
// console.log(age)


/*==================================== Question No 11 =========================================
difference b/w varialbe and string 
we can not write the name of variable inside '' and we can not write string with out ''
======================================= Answer =====================================*/
// let 'name' = 'Aziz'
// let name = Aziz

/*==================================== Question No 12 =========================================
alert()
======================================= Answer =====================================*/

// let name = 'Aziz';
// alert(name)
// alert('what are you doing')



/*==================================== Question No 13 =========================================
concatenation
======================================= Answer =====================================*/
// let number1= 22;
// let number2 = '3';
// let ans = number1 + number2;
// console.log(ans)




/*==================================== Question No 14 =========================================
check data type 
======================================= Answer =====================================*/
// let name = 'Aziz';
// console.log(typeof name);
// console.log(typeof 3233)

/*==================================== Question No 15 =========================================
javascript percedence rule 
if we have to do +,/,* and - than first we complete * from left to right,than we do / from  than do + and last - , all
operation we do from left to right ,
familiar operator in js 
multiplication , addition , subtration and division is called js familiar operators 
======================================= Answer =====================================*/
//  var result = 10 + 2 * 3 - 4 / 2;
//  result = 10 + 6 - 2
//  result = 16-2
//  result = 14
//  console.log(eval(10+2*3-4/2))

/*==================================== Question No 16 =========================================
Eliminity Ambiguity 
when we are doing mathematical operation in js  and we are confusing that what should we do 
first multiply,/,- or + than we use Eliminity Ambiguity rule 
that is following and it removes our confusion
======================================= Answer =====================================*/
// let add = 3 + 2 * 8-3 /4

//  add = (3+2)*(8-3)/(4)
// add = (5)*(5)/(4)
// add = 25/4
// console.log(eval((5)*(5)/(4)))

/*==================================== Question No 17 =========================================
Escape sequence character 
in html we use <br> tag for line break but in js we \n for line break , \n is escape sequence character in js
======================================= Answer =====================================*/
// console.log('my name is \n Aziz')

/*==================================== Question No 18 =========================================
+ concatenation of string 
+ familiar operator is used for the concatenation of string in js

======================================= Answer =====================================*/
// let firstName = 'Muhammad';
// let lastName = 'Ali';
// let fullName = firstName +' '+ lastName;
// console.log(fullName)

// let numOne = 5;
// let numTwo = '3'
// console.log(numOne + numTwo)

/*==================================== Question No 19 =========================================
== and === 
== compares only values but === compares values and data types also
======================================= Answer =====================================*/
// console.log( 2 === '2')
// console.log(5 == '5')
// console.log(4 !== '4')


/*==================================== Question No 20 =========================================
&& and  ||
======================================= Answer =====================================*/
// let name = prompt('Enter name');
// let age = prompt('enter age')
// if(name === 'A' && age === '20'){
//     console.log('eligible')
// }
// else{
//     console.log('not eligible')
// }


// let name = prompt('Enter name');
// let age = prompt('enter age')
// if(name === 'A' || age === '20'){
//     console.log('eligible')
// }
// else{
//     console.log('not eligible')
// }


/*==================================== Question No 21 =========================================
if/nested if
======================================= Answer =====================================*/
// let age = prompt('enter your age')
// if(age <20){
//     let education = prompt('enter education')
//     if(education > 10){
//     console.log('you are selected')

//     }
//     else{
//         console.log('you have low education')
//     }

// }
// else{
//     console.log('you age overage')
// }

/*==================================== Question No 22 =========================================
array is a like a variable and we can save multiple data types in an array
======================================= Answer =====================================*/
// let names = ['Aziz','Muneeb','','Rameez'];
// console.log(names,typeof names);
// console.log(names.length)
// console.log(names[11])





/*==================================== Question No 23 =========================================
Nested for loop  : 
we create a for loop and we create another for loop inside it , it is called nested for loop 
first run our outer loop one time than run inner loop full 
======================================= Answer =====================================*/
// Imagine a teacher says:
//         "In each of 3 classrooms, greet 5 students."
//         Outer loop = 3 classrooms

//         Inner loop = 5 students per classroom
//         for (let i = 1; i <= 3; i++) {
//          console.log('Classroom ' + i);

//         for (let j = 1; j <= 5; j++) {
//        console.log('  Hello Student ' + j);
//          }
//         }
// for(let i = 1; i <=3;i++){
//     console.log('classroom '+ i)

//     for(let j=1;j<=5;j++){
//     console.log('hello students ' + j)
// }

// }


// for (let bucket = 1; bucket <= 3; bucket++) {
//   console.log("Bucket " + bucket);

//   for (let plate = 1; plate <= 4; plate++) {
//     console.log("  Wash Plate " + plate);
//   }
// }

// for(let bucket = 1;bucket <=3;bucket++){
//     console.log('bucket '+ bucket)
//     for(let plate = 1;plate <=4;plate++){
//         console.log(' wash plate '+ plate)
//     }
// }

/*==================================== Question No 24 =========================================
print table of 5 by nested for loop
======================================= Answer =====================================*/
// for(let i = 1 ; i <= 1;i++){
//     console.log(i);
//     for(let j = 1; j <=10;j++){
//         // console.log(j)
//          console.log(5 + ' * ' + j + ' = ' + (5*j))
//     }
// }
// let n = 5
// for(let i = 1 ; i <= 1; i++){
//     console.log(i)
//     for(let j = 1; j <=20;j++){
//         console.log(j);
//        console.log(5 + ' * ' + j + ' = ' + (5*j))
//     }
// }
/*==================================== Question No 25 =========================================
Math.Pi is not built in function or method of js but it is a reserved keyword that is used to 
find the value of PI. 
Math.random() it is a built in function or method of js , .() in js is the sign of built in funciton or method
======================================= Answer =====================================*/
// let a = Math.PI;
// console.log(a.toFixed(2))

/*==================================== Question No 26 =========================================
Math.round()
it is used for removing decimal and it removes deciaml and all number after coming 
deciaml  and if number is equal to or greater than 5 after decimal it add one in nearest integer
======================================= Answer =====================================*/
// console.log(Math.round(2.78))
// console.log(Math.round(2.1988));
// console.log(Math.round(4.90))

/*==================================== Question No 27 =========================================
Math.sqrt() 
is used to know the number is of which number square for exmaple 9 , 9 is square root of 3 ,
it is used to get sqrt of positive number if we want to find sqrt of a negative number it return NaN
======================================= Answer =====================================*/
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(-4))
/*==================================== Question No 28 =========================================
Math.abs() 
it is used to convert a negative value to a positive value
======================================= Answer =====================================*/
// console.log(Math.abs(-98.76))

/*==================================== Question No 29 =========================================
Math.ceil()
it removes decimal and add 1 more in nearest integer, whethe number after decimal is = 5 or > 5, it adds one in nearest integer 
======================================= Answer =====================================*/
// console.log(Math.ceil(8.12));
// console.log(Math.ceil(8.9))

/*==================================== Question No 30 =========================================
Math.floor()
it only removes decimal , it does not add 1 more in nearest integer even number after 
decimal is = 5 or > 5
======================================= Answer =====================================*/
// console.log(Math.floor(2.897));
// console.log(Math.floor(4.076))

/*==================================== Question No 31 =========================================
Math.max() 
is used to find the maximum value in string or array
======================================= Answer =====================================*/
//  var maxVal = Math.max(3,666,87,35);
//  console.log(maxVal)
// let num = [55,2,3,5555,6];
// console.log(Math.max(...num))


/*==================================== Question No 32 =========================================
Math.min()
is used to find the minimum value of array or string
======================================= Answer =====================================*/
// var maxVal = Math.min(3,666,87,35);
//  console.log(maxVal)
// let num = [55,2,3,5555,6];
// console.log(Math.min(...num))





/*==================================== Question No 33 =========================================
Math.random() 
it gives sixteen numbers after decimal greater than 0 and smaller than 1 new on every fresh
======================================= Answer =====================================*/
// let a = Math.floor((Math.random()*3)+1);
// let a = Math.ceil(Math.random()* 3)
// console.log(a)

/*==================================== Question No 34 =========================================
.toLowerCase() and .toUpperCase()
======================================= Answer =====================================*/
// let name = 'aziZuLLah';
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())

/*==================================== Question No 35 =========================================
charAt()
it is built in method and is used to get the characher inside a string at a specifice 
location

======================================= Answer =====================================*/
// let str = 'javascript'
// console.log(str.charAt(2))
// console.log(str[4])
// let arr = ['apple','banaana','mango','guava'];
// console.log(arr.charAt(1))

// let a = str.charAt(str.length-1)
// console.log(a)


// let word = 'lovelydog';
//         let lastCharacter = word.charAt(word.length-1);
//         console.log(lastCharacter);
//         output = g

// let str = 'javascript';
// let ans = str.slice(-6);
// console.log(ans)
/*==================================== Question No 36 =========================================
converting string to numbers 
+ 
parseInt()
parseFloat()
Number
======================================= Answer =====================================*/
// let str = '23.321';
// // str = +str;
// // console.log(str,typeof str)
// // str = Number(str);
// // str = parseInt(str)
// str = parseFloat(str)
// console.log(str,typeof str)

/*==================================== Question No 37 =========================================
Number to string converting 
.toString 
+ ' '.
======================================= Answer =====================================*/
// let num = 213;
// // let ans = num.toString();
// let ans = num + '';
// console.log(ans,typeof ans)


/*==================================== Question No 38 =========================================
.toFixed is used to controll the length number after decimal
======================================= Answer =====================================*/
// let num = 323.3362475
// let ans = num.toFixed(2);
// console.log(ans)

/*==================================== Question No 39 =========================================
switch statement
======================================= Answer =====================================*/

// let day = Number(prompt('enter day'))
// switch(day){
//     case(1):
//     console.log('sunday')
//     break;
//     case(2) : 
//     console.log('Monday')
//     break;
//     case(3): 
//     console.log('Tuesday')
//     break;
//     case(4): 
//     console.log('Wednesday')
//     break;
//     default : console.log('plz enter valid number')
// }
            

// when we click on a button in js we receive some response it is called event, when a man press the button of doorbell ,bell is rung , pressing the button of doorbell and ringing of bell is an event , so when we click on a button we take some response ,,it is called event



/*==================================== Question No 40 =========================================
attribute 
attribute give us extra information about our html element
like width, 
hasAttribute 
we can check that our html element has attribut if has ans true else false 
getAttribut 
we can get the value of attribut by using get attribut, 
setAttribut 
we can set attribute to an html element , we give two thing firtst write the name of 
new attribut that we are giving and another wrtie its value 
attribute.length 
we can get the length of all attribut that are existing in our html element
======================================= Answer =====================================*/

            
// let get = document.getElementById('heading');
// console.log(get)
// let has = get.hasAttribute('width');
// console.log(has)
// let geta = get.getAttribute('width');
// console.log(geta)
// get.setAttribute('height','400px');
// get.setAttribute('height','800px')
// console.log(get.getAttribute('height'))
// console.log(get.attributes.length)


/*==================================== Question No 41 =========================================
classList and className 
======================================= Answer =====================================*/
// function applying(){
//     let get = document.getElementById('heading');
//     console.log(get)
//     get.className = 'styling'
// }

// function adding(){
//     let getting = document.getElementById('para')
//     getting.classList.add('stylechange')
// }

// function removing(){
//     let getting = document.getElementById('para')
//     getting.classList.remove('stylechange')
// }

// function toggling(){
//     let getting = document.getElementById('para')
//     getting.classList.toggle('stylechange')
// }

/*==================================== Question No 42 =========================================
onfocus 
onblur
======================================= Answer =====================================*/
// function first()
// {
//     let input = document.getElementById('input')
//     input.style.background = 'red'
// }

// function second(){
//     let input = document.getElementById('input')
//     input.style.height = '200px'
//     input.style.background = ''
// }



/*==================================== Question No 43 =========================================
previousElementSiblings and nexElementSiblings
======================================= Answer =====================================*/
// let get = document.getElementById('center');
// // console.log(get)
// // console.log(get.previousElementSibling.previousElementSibling)

// let getnext = get.nextElementSibling;
// console.log(getnext)



/*==================================== Question No 44 =========================================
.includes() 
it is used to check the existence of an item in array if item is existed returns true else false
======================================= Answer =====================================*/
//  let fruits = ['apple','mango','grapes'];
//        let check = fruits.includes('mango');
//        console.log(check);
//        ans = true 
// we can it apply on string also 
// let str = 'i am learing JavaScript';
// let check = str.includes('learning'); 
// console.log(check); 
// ans = true
// let fruits = ['apple','mango','grpapes']
// let check = fruits.includes('mango');
// console.log(check)

// let str = 'i am learing js daily';
// console.log(str.includes('js'))
// console.log(str.indexOf('js'))

// let fruits = ['mango','apple','banana','grapes']
// let ans = fruits.some((item)=>{
//     return item === 'apple'
// })

// console.log(ans)
/*==================================== Question No 45 =========================================
.at() 
.at() is used to get the value of an item of array or string , if item available it brings 
item else gives undefined
======================================= Answer =====================================*/
//  let fruits = ['apple','mango','banana'];
//        let check = fruits.at(1);
//        console.log(check);
//        ans = mango  
// if i give it index no 11 it returns undefined. 

// let str = 'hello';
// console.log(str.at(4));
// ans = 0

// let fruits = ['apple','mango','banana'];
// // let check = fruits.at(1);
// let check = fruits[1]
// console.log(check)

// let str = 'javascript';
// console.log(str.at(3))



/*==================================== Question No 46 =========================================
.startWith() 
is used to check that a string is starting with required word or letter or not , if starting with 
conditional word returns true else false
======================================= Answer =====================================*/
// example one: 
//         _______________________________________
//         let text = "Hello World";

// console.log(text.startsWith("Hello")); // true
// console.log(text.startsWith("World")); // false
// _______________________________________
// example two: 
// _________________________________________
// let text = "JavaScript";

// console.log(text.startsWith("Script", 4)); // true
// console.log(text.startsWith("Java", 4));   // false

// let text = 'Hello world';
// console.log(text.startsWith('Hellos'))
// let ab = 'javascript';
// console.log(ab.startsWith('j'))

            
/*==================================== Question No 47 =========================================
remove duplicate array
======================================= Answer =====================================*/

// const arr = [1,2,3,2,3,4,5,4,5,6,7];
// const removeDuplicates = (array)=>{
//     console.log(array)
    
//     let uniqueArr = [];
//     for(let item of array){
//         console.log(item)
//         if(!uniqueArr.includes(item)){
//             uniqueArr.push(item)
//         }
//     }
//     return uniqueArr


// }
// let ans =removeDuplicates(arr)
// console.log(ans)
/*==================================== Question No 48 =========================================
reverse string by for loop
======================================= Answer =====================================*/

// let str = 'javascript';
// let reversed = '';
// for(let i = str.length-1;i >=0;i--){
//     console.log(str[i])
//     reversed = reversed + str[i]
// }

// console.log(reversed)



/*==================================== Question No 49 =========================================
count vowels by for loop
======================================= Answer =====================================*/

// let str = 'HeLLo';
// str.toLowerCase();
// let count = 0;
// for(key of str){
//     let required = key;
//     console.log(required)
//     // console.log(key)
//     if(required === 'a' || required === 'e' || required === 'i' || required === 'o' || required === 'u')
//     {count++}
// }

// console.log(count)



/*==================================== Question No 50 =========================================
palindrome checker
======================================= Answer =====================================*/
//   let word = 'mahamt';
//  let check = '';
//  for(let i = word.length-1; i>=0;i--){check = check + word[i]};
//  console.log(check);/ if(word === check){console.log(`${word} is palindrome`)}
//  else{console.log(`${word} is not palindrome`)}

// let word = 'mamt';
// let check = ''
// for(let i = word.length-1;i>=0;i--){
//     console.log(word[i])
//     check =  check + word[i]
// }

// if(word === check){
//     console.log(`${word} is palindrome`)

// }
// else{console.log(`${word} is not palindrom`)}

/*==================================== Question No 51 =========================================

======================================= Answer =====================================*/

// let arr = [1, [2, 3], 4];
// let flat = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       flat.push(arr[i][j]);
//     }
//   } else {
//     flat.push(arr[i]);
//   }
// }

// console.log(flat);  // [1, 2, 3, 4]
//    let arr = [1,[2,3],4];
//    let flat = [];
//    for(let i = 0; i<arr.length;i++){
//    if(Array.isArray(arr[i])){
//     console.log(arr[i])
//     for(let j = 0; j <arr[i].length;j++){
//         flat.push(arr[i][j])
//     }
//    }
//    else{
//     flat.push(arr[i])
//    }
//    }
// console.log(flat)


/*==================================== Question No 52 =========================================
anagram checking
======================================= Answer =====================================*/
// function isAnagram(a,b){
//     return(
//         a.split('').sort().join('') === b.split('').sort().join('')
//     )
// }
// console.log(isAnagram('listen','silent'))
// console.log(isAnagram('hello','world'))



/*==================================== Question No 53 =========================================
flatten array 
======================================= Answer =====================================*/
// let arr = [1,[2,3],[4,[5,6]]];
// let a = arr.join();

// console.log(a,typeof a)
// let ans = a.split(',');
// console.log(ans)
// let result = ans.map(Number);
// console.log(result)



/*==================================== Question No 54 =========================================
flatten array
======================================= Answer =====================================*/
// let arr = [1,[2,3],4,5,[6],7];
// console.log(arr);
// let str = arr.join();
// console.log(str)
// let spl = str.split(',');
// console.log(spl);
// let result = spl.map(Number);
// console.log(result)


/*==================================== Question No 55 =========================================
anagram 
======================================= Answer =====================================*/
// function isAnagram(a,b){
// return(
//     a.split('').sort().join('') === b.split('').sort().join('')
// )
// }
// console.log(isAnagram('listen','silent'))

/*==================================== Question No 56 =========================================
unique array
======================================= Answer =====================================*/
// const array = [1,2,2,3,3,4,5,6,6,7,5]
// const uniqueArr = (array)=>{
//     let arr = [];
//     for(let item of array){
//         console.log(item)
//         if(!arr.includes(item)){
//             arr.push(item)
//         }
        
//     }
//     return arr

// }
// let ans = uniqueArr(array);
// console.log(ans)




/*==================================== Question No 57 =========================================
reverse string 
and palindrome
======================================= Answer =====================================*/
let str = prompt('enter str')
let reversed = '';
for(let i = str.length - 1;i >= 0;i--){
    // console.log(str[i])
    reversed = reversed + str[i]
}

console.log(reversed)
if(str === reversed){
    console.log('palindrome')
}
else{console.log('not palindrom')}
/*==================================== Question No 58 =========================================
find large number by for loop
======================================= Answer =====================================*/


// let array = [12,5,20,88,8,17];
// let large = Math.max(...array);
// // console.log(large)
// let lg = 0;
// for(let item of array){
//     // console.log(item)
//     if(item > lg){
//         lg = item
//     }
// }
// console.log(lg)

/*==================================== Question No 59 =========================================
small number finding by array 
======================================= Answer =====================================*/
// let array = [12,5,20,88,8,17];
// let small = 0;
// for(let item of array){
//     if(item < small){
//         small = item
//     }

// }
// console.log(small)


//        let array = [3,2,454,8];
// console.log(Math.min(...array))





/*==================================== Question No 60 =========================================
factorial
======================================= Answer =====================================*/
// function processing(){let getNum = document.getElementById('input').value;
//     let display = document.getElementById('display');
//     if(getNum > 0){let factorial = 1;
//         for(let i = 1 ; i <= getNum ; i++){factorial = factorial*i;
            
//         }
//         display.textContent = factorial;
//     }
//     else{alert('Enter Number > Zero')}
// }

// let num = 2;
// let factorial = 1;
// if(num >0){
    
//     for(let i = 1;i <=num;i++){
//         factorial = factorial *i
//     }
// }
// console.log(factorial)

// let num = 5;
// let factorial = 1;
// for(let i = 1;i <=num;i++){
//     factorial = factorial *i
// }
// console.log(factorial)
/*==================================== Question No 61 =========================================
vowel extractor
======================================= Answer =====================================*/
// function voweling(){let getInput = document.getElementById('input').value;
//            let vowel = getInput.match(/[aeiou]/gi);
//            vowel = vowel.join('');
//            let display = document.getElementById('display');
//              display.innerHTML = vowel;
// }
 




