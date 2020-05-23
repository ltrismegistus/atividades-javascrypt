/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime
o seunovo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

let salário = function(plano, atual = 1045){
    switch(plano) {
        case 'A':
            atual += (atual *= 0.10)
            console.log(atual)
            break;
        case 'B':
            atual += (atual *= 0.15)
            console.log(atual)
            break;
        case 'C':
            atual += (atual *= 0.20)
            console.log(atual)
            break;
        default:
            console.log('plano invalido')
    }
}

salário('C', 2000)
