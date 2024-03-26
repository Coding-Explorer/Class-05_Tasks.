//Example of Unary operators (++) (--) ,prefix and postfix operators.
//Example of usage of pre & post increment(++index & index++) and pre & post decrement(--index & index--)

let a:number=5; //a++; becomes 6
let b:number=2; //b--; becomes 1
let c:number;
c=++a + a++ +--b +b-- +a+ b++ +b;
console.log(c);
// 6+ 7 + 1 + 0 + 5 + 1 + 2
