const prompt = require("prompt-sync")();

//1234

var basic_salaray,rent_allounce,dernence_amount,gross_salaray;

basic_salaray = parseInt(prompt("basic_salaray "));
rent_allounce = basic_salaray*0.2;
dernence_amount = basic_salaray*0.4;
gross_salaray = basic_salaray+rent_allounce+dernence_amount;

console.log("rent_allounce: ",rent_allounce);
console.log("dernence_amount: ",dernence_amount);

console.log(" Total gross_salary: ",gross_salaray);