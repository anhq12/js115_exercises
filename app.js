 /*//hien thi tren dev tool
// dev tool la giao dien hien thi khac cua js
alert("You have won an award!");// alert hien thi dong nay
// variable 
let x = 10;
//var y = 10; //ít dùng chỉ để giới thiệu thôi
//const name ='fuck you';// ko muốn đổi giá trị -> nếu gán lại thì chết cmnr
console.log(x);

*/

/*string

let fullName = 'tuan';
let firstName = "yodagaming";
let lastName = 'coomer';
let code = `c4e`
let count = 223232;
let courseName = `lop ${code} co si so ${count} `;
console.log(firstName+ ' ' + fullName + '.' + lastName, courseName);
*/

//number
/*
let coom = 5;
let cum = 22/7;
let x = 2;

let sum  = coom + cum;
let exp = coom**cum;
let diff = coom  - cum;
let div = coom/cum;
let mod = 5%2; //chia lay du
console.log(sum, exp, diff, div);
console.log(mod + '3');


let fullName = prompt('your name:');
console.log(fullName);
*/
/*
let myAge = prompt('UwU ban bao nhieu tuoi ?');
alert(`ban co ${myAge} xuan xanh`);// alert('ban da co ' + myAge +'xanh xuan')*/

let currYear = 2021;
let birthYearStr = prompt('ban sinh nam bao nhieu?');
console.log(typeof birthYearStr);
let birthYear = Number(birthYearStr);
let myAge = currYear - birthYear;
alert('Ban da co ' + myAge + ' xuan xanh');
console.log(typeof birthYear);