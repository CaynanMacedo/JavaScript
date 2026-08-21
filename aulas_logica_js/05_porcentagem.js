//AULA 5 PORCENTAGEM

let prompt = require("prompt-sync")()
let valor = parseFloat ( prompt("Digite o valor = R$") )
let desconto = parseFloat ( prompt("digite o desconto ") )
desconto = desconto / 100
let total = valor * desconto
let valor_desconto = valor - total
console.log(valor_desconto)