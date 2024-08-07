const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um valor: "));

if(num%2 === 0){
    console.log("O valor será par!")
}
else{
    console.log("O valor será impar!")
}



