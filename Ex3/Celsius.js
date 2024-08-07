const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite uma temperatura: "));

let F = (num * 9/5) + 32;

console.log("A conversão será: " + F);