//AULA 04 CONVERTER VARIAVEIS 

let prompt = require("prompt-sync")()

let var1 = prompt("Digite um numero ")
var1 = parseInt(var1)

let var2 = parseInt( prompt("Digite outro numero ") )

let soma = var1 + var2

console.log("O reultado é = " +soma);   

//--------------------------------------------------------------------

//ATIVIDADE 1 

let nascimento = prompt("Digite o ano do seu nascimento ")
nascimento = parseInt(nascimento)
let idade = 2026 - nascimento
console.log("voce tem " +idade);

//ATIVIDADE 2 

let nota1 = prompt("digite sua nota ") 
nota1 = parseInt(nota1)
let nota2 = prompt("digite sua nota ")
nota2 = parseInt(nota2)
let nota3 = prompt("digite sua nota ")
nota3 = parseInt(nota3)
let media = (nota1 + nota2 + nota3) / 3
console.log("sua media é igual a " +media);

//ATIVIDADE 3 

let produto = prompt("digite o nome do produto ")
let preco = prompt("digite o valor do " +produto+ " ")
preco = parseInt(preco)
let estoque = prompt("digite a quantidade do " +produto+ " ")
estoque = parseInt(estoque)
let fatura = preco * estoque
console.log("o faturamento da venda de todos os produtos é " +fatura);
