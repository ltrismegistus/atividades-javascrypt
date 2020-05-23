/*
 12) Faça um algoritmo que calcule o fatorial de um número
 */

let fatorial = function (num) {
    
    let fatores = []
    for (num;num > 0; --num){
        fatores.push(num)
        
    }
    console.log(`fatores = ${fatores}`)
    const reducer = (accumulator, currentValue) => {
        return accumulator * currentValue;
    };
    console.log(`resutado = ${fatores.reduce(reducer)}`)
}

fatorial(100)