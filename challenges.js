// Desafio 1
function compareTrue(valor1,valor2) {
  if(valor1 && valor2 === true){
    return true;
  }
 else{
   return false;
 }
}

// Desafio 2
function calcArea(base,height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(frase) {
  return  frase[frase.length - 1] +', ' +frase[0]
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  for(var i = 0; i < arr.length; ++i){
    if(arr[i] == Math.max(...arr))
        count++;
}
  return count ;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let  distGato1 = cat1 -mouse;
  let distGato2 = cat2 -mouse;
  if (distGato1 < 0) {
    distGato1 = distGato1 * -1
  }
  if (distGato2 < 0) {
    distGato2 = distGato2 * -1
  }
  if (distGato1 === distGato2) {
    return  'os gatos trombam e o rato foge';
  }
  else{
    if (distGato1 < distGato2) {
      return 'cat1';
    }
    else {
      return 'cat2';
    }
  }
}
// Desafio 8
function fizzBuzz(fizz) {
  let array = []
  for (let index = 0; index < fizz.length; index++) {
    if (fizz[index] % 3 === 0 && fizz[index] % 5 !== 0) {
      array.push('fizz')
    }
    if (fizz[index] % 5 === 0 && fizz[index] % 3 !== 0) {
      array.push('buzz')
    }
    if (fizz[index] % 3 === 0 && fizz[index] % 5 === 0 ) {
      array.push('fizzBuzz')
    }
    if (fizz[index] % 3 != 0 && fizz[index] % 5 != 0 ) {
      array.push('bug!')
    }
    
  }
  return array;
}

// Desafio 9
  function encode(frase) {
    for (let string of frase) {
      frase = frase.replace('a', '1');
      frase = frase.replace('e', '2');
      frase = frase.replace('i', '3');
      frase = frase.replace('o', '4');
      frase = frase.replace('u', '5');
    } return (frase);
}
function decode(frase) {
  for (let string of frase) {
    frase = frase.replace('1', 'a');
    frase = frase.replace('2', 'e');
    frase = frase.replace('3', 'i');
    frase = frase.replace('4', 'o');
    frase = frase.replace('5', 'u');
  } return (frase);
}

// Desafio 10
function techList(array, nome) {
  let finalReturn=[];
  if (array.length == 0){
    return 'Vazio!';
  }
  else{
    for(index =0; index < array.length ; index ++){
      finalReturn.push({tech: array[index], name: nome})
   }
    finalReturn.sort(function (a, b) {return (a.tech> b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);});
  }
  return finalReturn;

}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
