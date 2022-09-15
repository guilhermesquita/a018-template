const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

function pokedex(pokemon){
  pokemon.vida = 100;
}

const pokemonsVidaCheia = pokemons.map((name)=>{
  pokedex(name);
  return name
})

console.log('Vida Renovada!',pokemonsVidaCheia, '\n\n')

const pokemonsDeFogo = pokemons.filter((name) => {
  return name.tipo === 'fogo';
})

console.log('Pokemons de fogo: \n',pokemonsDeFogo)

//EXE01
// const arrayNumbers = [1,2,3,4,5,6];

// function multNumbers(array){
//   newArray = []
//   for(number of array){
//     newArray.push(number*3)
//   }
//   return newArray;
// }

// const returnFunc = multNumbers(arrayNumbers);
// console.log(arrayNumbers ,"-->",returnFunc)

// const arrNumber = [1,2,3,4,5,6];

// function pairsNumbers (arr){
//   newArr = []
//   for(numb of arr){
//     if(numb % 2 == 0){
//       newArr.push(numb);
//     }
//   }
//   return newArr;
// }

// const returnImp = pairsNumbers(arrNumber);
// console.log(arrNumber,"-->",returnImp)

// function callBack(array, func){
//   const res = func(array);
//   return `O resultado do novo array é: ${res}`;
// }

// const imprimirMult = callBack(arrNumber, multNumbers);
// const imprimirPares = callBack(arrNumber, pairsNumbers)

// console.log(imprimirMult);
// console.log(imprimirPares);

/////////////////////////////////////////////
// //EXE02 - MAP
// const arrayNumbers = [1, 2, 3, 4, 5, 6];

// const arrayMultiplicado = arrayNumbers.map((number) => { //(NUMBER, INDICE, ARRAY)
//   return number * 3
// })
// console.log("MAP:", arrayNumbers, "-->", arrayMultiplicado)

// //EXE02 - FILTER
// const arrayPares = arrayNumbers.filter((number) => { //(NUMBER, INDICE, ARRAY)
//   return number % 2 == 0;
// })

// console.log("FILTER :", arrayNumbers, "-->", arrayPares)