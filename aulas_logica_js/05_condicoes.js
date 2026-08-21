//AULA 5 - CONDIÇÕES
let prompt = require("prompt-sync")()

console.log("Bem-vindo ao DETRAN !");
let idade = prompt("Digite a sua idade: ") 

if (idade >= 18){
    console.log("Voce ja tem idade para tirar sua CNH ");   
} else {
    console.log("Voce ainda não tem idade o suficiente para tirar sua CNH sai daqui criança")
}

