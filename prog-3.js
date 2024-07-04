const prompt = require("prompt-sync")();

var x,b,c,ans;
x=parseInt(prompt("enter four digit number  :"));
b=Math.floor(x/1000);
c=x%10;
ans=b+c;
console.log("sum of two middle number ",ans);