// function otpGenerator(){
//     var otp=""
//     for(i=1;i<=5;i++){
//         otp+=Math.floor(Math.random()*10);
//     }
//     //console.log(otp);
//     // alert(`your OTP is: ${otp}`);
//     document.getElementById("two").innerHTML=`your OTP is : ${otp}`;
//     document.getElementById("two").style.color="green";
//     //storing in console
//     localStorage.setItem('otp',otp);
//     console.log(localStorage);
//     console.log(otp);
// }
// otpGenerator();// we write this is here when ever you refresh the page otp will change
// function getOTP(){
//     var d=localStorage.getItem('otp');
//     console.log(d);
// }
// getOTP();

//using spread operator 

// let arr1=[10,20,30,40,50];
// let arr2=[23,64,67,89,12];
// //concat of 2 or more arrays
// let arr3=[...arr1,...arr2];
// console.log(arr3);
// //clone of arr2
// let arr4=[...arr2];
// console.log("arr 4 clone of arr2",arr4);

//mapping

let one=[10,20,30,40,50];
                        
// one.map((value,index)=>{})  //it is syntax
const a=one.map((value,index)=>{
    console.log(value*2);//double the values sequence
    console.log(index);
});

const b=one.map((b,c)=>{
    return b*2; //double in array format
}
);
console.log(b);

//filter
let two=[10,20,30,40,60,70,80,90];
let things=two.filter(item=>item>30);
let newly=things.map((d,e)=>{
    return d;
})
console.log("filtered items:",newly);

