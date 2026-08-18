/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/
console.log(" ______")
console.log("|      |")
console.log("|      |")
console.log("|      |")
console.log("|______|\n\n");

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/
let cidade = "Sao Carlos"
let estado = "SP"
let lar = cidade + " " + estado
console.log("eu moro em " +lar+ "\n\n");

/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/
let numero_1 = 3
let numero_2 = 4
let soma = numero_1 + numero_2
console.log("a soma é " +soma+ "\n\n")

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
let idade = 19
let futuro = idade + 10
console.log("Olá, você tem " +idade+ " amos e daqui 10 anos tera " +futuro+ "\n\n");

/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/
let numero = 6
let dobro = numero * 2
let triplo = numero * 3
console.log("o numero é " +numero+ " o dobro é " +dobro+ " e o triplo é " +triplo+ "\n\n");

/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/
let prod_1 = "tenis"
let prod_2 = "shorts"
let preco_prod_1 = 40 
let preco_prod_2 = 50
let carrinho = preco_prod_1 + preco_prod_2 
console.log("o preço do produto " +prod_1+ " é de R$" +preco_prod_1+ " o preço do " +prod_2+ " é de R$" +preco_prod_2);
console.log("o preço de ambos os produtos juntos é de R$" +carrinho+ "\n\n");

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/
let salario = 3000
let aumento = 500
let inss = 250
let salario_liq = salario + aumento - inss
console.log("o seu salario é de " +salario);
console.log("o novo total do seu salario é de " +salario_liq+ "\n\n")

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/
let mesada = 100
let gasto = 35
let sobra = mesada - gasto
console.log("o valor da mesada é de R$" +mesada+ " o valor gasto é de R$" +gasto+ " o dinheiro que ainda lhe resta é de R$" +sobra+ "\n\n");

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/
let base = 2
let altura = 3
let area_retangulo = base * altura 
console.log("A base é de " +base+ " a altura é de " +altura+ " portanto a area é de " +area_retangulo+ "\n\n");

/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/
let Celsius = 28
let Fahrenheit = Celsius * 1.8 + 32
let Kelvin = Celsius + 273.15
console.log("a temperatura em celsius é de " +Celsius+ " a em fahrenheit é de " +Fahrenheit+ " e a de kelvin é de " +Kelvin+ "\n\n");

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/
let horas = 3 
let minutos = horas * 60
let segundos = horas * 3600
console.log("o tempo é de " +horas+ " horas " +minutos+ " minutos e " +segundos+ " segundos\n\n");

/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/
let variavel_1 = 4
let variavel_2 = 6
let troca = variavel_1
variavel_1 = variavel_2
variavel_2 = troca
console.log("os valores são de " +variavel_1 + " " + variavel_2+ "\n\n");

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/
let distancia = 500
let litros = 30
let preco_litro = 5.50
let consumo_p_litro = distancia / litros
let valor_comb = litros * preco_litro
console.log("A distancia percorrida foi de " +distancia);
console.log("foram gastos " +litros+ " litros de combustivel" );
console.log("o consumo foi de " +consumo_p_litro+ " litro por km");
console.log("o valor total gasto foi de " +valor_comb);




