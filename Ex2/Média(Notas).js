const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um valor: "));

if(num >= 6){
    console.log(`Aprovado!`)
}
else if (num < 4){
    console.log(`Reprovado!`)
}
else{
    console.log(`Em recuperação!`)
}