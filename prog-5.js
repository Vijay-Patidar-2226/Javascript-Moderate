const prompt = require("prompt-sync")();

//12345

var x,a,b,c,ans;

x = parseInt(prompt("enter five digit number "));
a = Math.floor((x/1000) %10);
b = Math.floor((x/100) %10);
c = Math.floor((x%100) /10);

ans = a+b+c;

console.log("sum of three middle number: ",ans);