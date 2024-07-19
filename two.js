// var a = false;
// if (a) {
//     console.log("It is true value");
// }
// else {
//     console.log("it is false");
// }

// document.write("Hello text on brower");
// alert("It is Dialog Box");
// confirm("It is confirm dialogue box");
// prompt("It is prompt dialog box");

// var age=Number(prompt("Enter the age"));
// if(age<=5){
//     alert("Not appeal for vote");
// }
// else if(age>5 || age<100){
//     alert("Appeal for vote");
// }
// else{
//     alert("Missmatch age.....");
// }
// task
// var age=Number(prompt("Enter the Age:"));
// if (age<5){
//     alert("pay 5 rupees");
// }
// else if(age>5 && age<10){
//     alert("pay 10 rupees");
// }
// else if(age>10){
//     alert("pay 20 rupees")
// }
// else{
//     alert("Given proper age")
// }

// switch case

// var number1=Number(prompt("Enter the number 1"));
// var number2=Number(prompt("Enter the number2:"));
// var operator=prompt("Enter the operator");

// switch(operator){
//     case '+':
//         alert("Addition is:"+(number1+number2));
//         break;
//     case '-':
//         alert("subtracted value:"+(number1-number2));
//         break;
//     case '*':
//         alert("Multiplied are:"+(number1*number2));
//         break;
//     case '/':
//         alert("Division is :"+(number1/number2));
//         break;
//     default:
//         alert("provide the proper info")
// }

// loops
// i=0;
// while(i<=10){
//     i++;
//     console.log(i);
// }

// i=6;
// do{
//     i++;
//     console.log(i);
// }while(i<=20);

// for(i=3;i<=9;i++){
//     console.log(i);
// }

// let arr=[21,4,665,768,32];
// for(let x in arr){
//     console.log(arr[x]);
//     //console.log(x+arr[x]);
// }

// let arr=[21,4,665,768,32];
// for (let y of arr){
//     console.log(y);
// }

// let obj={
//     name:"Raghava",
//     place:"kandrika",
//     age:22
// }
// for (let one in obj){
//     console.log(one+"-"+obj[one])
// }
// for(let three of obj){
//     console.log(three);// error
// }
let a=[23,14,10,24];
a.forEach((index,value)=>{
    //console.log(index);
    console.log(value);
})