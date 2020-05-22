/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
ele mantém registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo 
valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la
irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu 
recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).*/


let doSearch = function(array, targetValue) {
	let min = 0;max = array.length - 1;guess = 0;cont = 0;
    while(max >= min) {
        guess = Math.floor((max + min)/2);
        cont++;
        console.log("min="+min);
        console.log("max="+max);
        console.log("guess=" + guess);
        console.log(array[guess]);
        if (array[guess] === targetValue){
            console.log("encontrou o alvo");
            console.log(`numero de tentetivas = ${cont}`);
            return guess;
            
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else {max = guess - 1;}
        
    }
    
	return -1;
 
};

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let result = doSearch(primes, 7);
console.log(`Found prime at index ${result}`);