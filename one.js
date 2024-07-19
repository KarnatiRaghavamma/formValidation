//+,-,*,/,**  Arthematic
var a=5;
console.log(a+5);
console.log(a-2);
console.log(a*10);
console.log(a/5);
console.log(a**2);

console.log("post ince")
var a=1;
console.log(a);
console.log(a++);//post increment
console.log(a);

console.log(++a);//pre increment
console.log(a);
console.log("post pre decr")
var b=2;
console.log(b);
console.log(b++);//post dec
console.log(b);

console.log(++b);//pre dec
console.log(a);

console.log("Assignment operators ");
var a=56;
var b=45;
//c=++a;
c=a+b;
console.log(c);

// >,<,<=,>=,     ==,!=,===,!==,ternary (relation and comparision)
// var a=12;
// var b=14;
// c=a>b;
// c=a<b;
// console.log(c);
// console.log(a<=b);

var a=20;
var b="20";
console.log(a==b);//true
console.log(a!=b);//false
console.log(a===b);//false
console.log(a!==b);//true

//terenary
var c=97;
var d=34;
var h=45;
console.log(c<d?"Value is correct":"value is Wrong");

console.log("logical oprators");
e=c>d &&  d<h;//logical and
console.log(e)//true

f=c<d ||d<h;//logical or
console.log(f);//true

console.log(!c);//false

