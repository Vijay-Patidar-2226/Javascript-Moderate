
const prompt = require("prompt-sync")();

var amount,n_1000,n_500,n_100,n_50,n_20,n_10;

amount = parseInt(prompt("Enter the amount:"));

n_1000 =Math.floor(amount/1000);

n_500 = Math.floor((amount%1000)/500);

n_100 = Math.floor((amount%500)/100);

n_50 = Math.floor((amount%100)/50);

n_20 = Math.floor((amount%50)/20);

n_10 = Math.floor((amount%20)/10);

console.log("No. of 1000 notes:",n_1000);
console.log("No. of 500 notes:",n_500);
console.log("No. of 100 notes:",n_100);
console.log("No. of 50 notes:",n_50);
console.log("No. of 20 notes:",n_20);
console.log("No. of 10 notes:",n_10);

