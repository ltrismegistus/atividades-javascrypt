/*
13) ​ Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número 
referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*/

let diaUtil = function(dia) {
    switch(dia) {
        case 1:
            console.log("domingo")
            break;
        case 2:
            console.log("segunda")
            break;
        case 3:
            console.log("terca")
            break;
        default:
            console.log('dia invalido')
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)