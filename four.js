document.getElementById('one').innerHTML="I am from javascript by id";
document.getElementsByClassName('two')[0].innerHTML="I am from class content from js";
document.getElementsByTagName('h6')[0].innerText="I am from tag content";

document.getElementById('one').style.color="green";
document.getElementById('one').style.backgroundColor="orange";

// declare a arrow function addition of two numbers
const a=(b,c)=>{
    add=c+b;
    console.log(add);//void
}
a(3,3);

const b=(b,c)=>{
    s=c-b;
    return s;
}
console.log(b(3,3));// non void

//add Eventlistener(event,function)-->Syntax

btn.addEventListener('click',function(){
    alert('you clicked the button');
    document.write('Hi');
})

five.addEventListener('change',function(){
    alert('you Enter the data Change');
    document.write('Hello');
})
// task
task.addEventListener('change',(()=>{
    document.getElementById('ant').innerHTML=`${task.value};`
}))