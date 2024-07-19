// string methods in js
var a="IQOO,iphone,Asus,samsung,Infinix";
var b=a.indexOf("ne");
console.log(b);

var c=a.charAt(6);// we can use (at,codechatAt,charAt)
console.log(c);

var d=a.toLowerCase(a);//lower case
console.log(d);

var e=a.toUpperCase();//upper case
console.log(e);

var f="Mobile phones are".concat(" ",a);// for concate spread operator also used
console.log(f);

var g=a.repeat(2);
console.log(g);//repeat

var h=a.replace("iphone","nothing");//replace
console.log(h)

var i=a.slice(3,8);//slicing
console.log(i);

var j=a.split(',');//split
console.log(j);

var k=a.trim();//trim,trimStart,trimEnd---remove spaces
console.log(k);

var l=a.substring(2,10);//substring
console.log(l);

//number
var a=2342.9324545;
var b=a.toExponential(2);
var b=a.toExponential(10);//exponential
console.log(b);

var c=a.toFixed(4);
console.log(c);

var d=a.toPrecision();
console.log(d);

//implict -- auto convertion
//explict -- we convert convertion

//array methods
var a=["Watch","phone","bag","books"];
console.log(a);
var b=a.pop();//remove
console.log(b);
console.log(a);

var c=a.push("Bluetooth");//add
console.log(c);
console.log(a);

var c=a.shift(); //remove stating from the array
console.log(c);
console.log(a);
var d=a.unshift("keys","laptop");//we can add one or more values at starting array
console.log(d);
console.log(a);

var e=a.splice(0,3);// nothing but its is a sub array 
console.log(e);

console.log(a);
var f=a.join("*");
console.log(f);

//math methods

var a=12.9;
console.log(Math.floor(a));//12
console.log(Math.ceil(a));//13
console.log(Math.round(a));//13
var a=12.5;
console.log(Math.round(a));//13
var b=12.3;
console.log(Math.round(b));//12

console.log(Math.random());//random numbers
a=45;
console.log(Math.tan(a));
//a=12;
console.log(Math.pow(12,2));
console.log(Math.sqrt(169));




