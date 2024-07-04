const prompt = require("prompt-sync")();

var a,b,c;

a=parseInt(prompt("enter a"));
b=parseInt(prompt("enter b"));



c=a;
a=b;
b=c;

console.log(`swap of ${a} ${b}`);