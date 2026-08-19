// sistema de precificação Conradito Doguezito

let prompt = require("prompt-sync")()

console.log("\n\nSeja bem-vindo ao sistema de cadastro de preços do Conradito Doguezito \n");

let pao = parseFloat ( prompt("Digite o valor do pão = R$") )
let salsicha = parseFloat ( prompt("Digite o valor da salsicha = R$") )
let pure = parseFloat ( prompt("Digite o valor do purê = R$") )
let queijo = parseFloat ( prompt("Digite o valor do queijo = R$") )
let bacon = parseFloat ( prompt("Digite o valor do bacon = R$") )

let lucro = parseFloat ( prompt("Qual o lucro desejado com a venda ?  = ") )
lucro = lucro / 100

let custo_dogpure = pao + salsicha + pure + bacon
let custo_dogcremoso = pao + 2 * salsicha + queijo
let custo_dogespecial = pao + salsicha + pure + queijo + bacon
let custo_combo = custo_dogpure + custo_dogcremoso + custo_dogespecial 

let venda_dogpure = custo_dogpure * lucro
let venda_dogcremoso = custo_dogcremoso * lucro
let venda_dogespecial = custo_dogespecial * lucro
let venda_combo = custo_combo * lucro

console.log(custo_dogpure)
console.log(custo_dogcremoso)
console.log(custo_dogespecial)
console.log(custo_combo)
console.log("--------------");
console.log(venda_dogpure)
console.log(venda_dogcremoso)
console.log(venda_dogespecial)
console.log(venda_combo)