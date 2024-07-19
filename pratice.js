// //javascript--variavles--var,let,const
// var a = 34;
// console.log(a);
// var b = 4;
// console.log(b);
// console.log(a - b);
// //let 
// let c = 24;
// console.log(c);
// //const
// const d = 2;
// console.log(d);
// //datatypes:-1)primitive
// //   2)Non-primitive-array and object
// var a = "raghava";
// console.log(a);
// console.log(typeof (a));
// //array
// var a = [1, 2, 4.5, "Raghava"];
// console.log(a);
// console.log(a[2]);
// //object
// var e = {
//     name: "Raghavamma",
//     age: 22,
//     place: "Kandrika",
//     work: "Software",
//     Domine: "frontend"
// }
// console.log(e);
// console.log(typeof (e));
// console.log(e.name);

// //Arthematic operations
// //conditions
// var a = false;
// if (a) {
//     console.log("It is a false");
// }
// else {
//     console.log("It is true");
// }
// document.write("I am K.Raghavamma");
// //Dialog boxes--3
// //alert,confirm,prompt
// // alert("Hey you click alert");

// let obj = {
//     name: "Raghava",
//     place: "kandrika",
//     age: 22
// }
// for (let one in obj) {
//     console.log(one + "-" + obj[one])
// }
// // for (let three of obj) {
// //     console.log(three);// error
// // }

// //functions
// function h(){
//     console.log("Hello Raghavamma with the new start...");
// }
// h();
// function add(){
//     a=2;
//     b=4;
//     c=a+b;
//     console.log("addition on two num:",c);
// }
// add();
// function add1(a,b){
    
//     e=a+b;
//     console.log("addition:",e);//change the variable in function everytime
// }
// add1(2,3);
// //arrow function
// //elements in JS

// document.getElementById('one').innerHTML="I am starting pratice";
// document.getElementById('one').style.color="white";
// document.getElementById('one').style.padding="30px";
// document.getElementById('one').style.backgroundColor="gray";

// //alerts and events
// btn.addEventListener('click',function(){
//     alert('you clicked the button');
//     document.write('Hi');
// })

// two.addEventListener('change',function(){
//     alert('you Enter the data Change');
//     document.write('Hello');
// })

// two.addEventListener('change',function(){
//     alert("you entered the data");
// })

// task.addEventListener('change',(()=>{
//     document.getElementById('ant').innerHTML=`${task.value};`
// }))

// task.addEventListener('change',function(){
//     document.getElementById('ant').innerHTML=`${task.value}`;
// })

// document.getElementById('one').style.background="green";
// document.getElementById('one').style.color="yellow";
// document.getElementById('one').style.button="green";

var number1=Number(prompt("Enter the number 1"));
var number2=Number(prompt("Enter the number2:"));
var operator=prompt("Enter the operator");
switch(operator){
    case '+':
        alert("Addition is:"+(number1+number2));
        break;
    case '-':
        alert("subtracted value:"+(number1-number2));
        break;
    case '*':
        alert("Multiplied are:"+(number1*number2));
        break;
    case '/':
        alert("Division is :"+(number1/number2));
        break;
    default:
        alert("provide the proper info")
}
