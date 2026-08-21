let prompt = require("prompt-sync")()

let nome = prompt("Ola digite o seu nome ")
let sobrenome = prompt("Digite seu sobrenome ")
let idade = prompt("Digite sua idade ")
let nome_completo = nome +" "+ sobrenome

console.log("seja bem vindo(a) " +nome_completo+ " voce tem " +idade+ " anos de idade \n\n\n")

let prod_1 = prompt("Digite o nome de um produto ")
let preco_prod_1 = prompt("Digite o valor de " +prod_1+ " R$")
let prod_2 = prompt("Digite o nome de outro produto ")
let preco_prod_2 = prompt("Digite o preço de " +prod_2+ " R$")

console.log("-----RELATORIO-----");
console.log(prod_1+ " - R$" +preco_prod_1);
console.log(prod_2+ " - R$" +preco_prod_2);


