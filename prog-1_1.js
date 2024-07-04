const prompt = require("prompt-sync")();

var a,b;

a=parseInt(prompt("enter a"));
b=parseInt(prompt("enter b"));

a=a+b;
b=a-b;
a=a-b;


console.log(`swap of ${a} ${b}`);