/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições 
matemáticas de existência de um triângulo).*/

let triângulo = function (l1,l2,l3) {
    if ((l1 === l2) && (l1 === l3)) {
        console.log('esse triangulo e equilatero')
    }else if ((l1 !== l2) && (l1 !== l3) && (l3 !== l2)) {
        console.log('esse triangulo e escaleno')
    }else if ((l1 === l2 || l1 === l3) || l3 === l2) {
        console.log('esse triangulo e isoceles')
    }
    else {console.log('dados invalidos')}
}

triângulo(1.1, 1.1, 1.1)
triângulo(2.1,2,3)
triângulo(1,1,2)
triângulo(1,2,2)