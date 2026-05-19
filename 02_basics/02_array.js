const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
kyuki ye kuch hi lelega to wo nested array bana dega arr2 ko push krega naki uske elements ko

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros); //elements add honge naki array return new array

const all_new_heros = [...marvel_heros, ...dc_heros]//spread

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//flatten the array



console.log(Array.isArray("Hitesh")) //will it have rhis bool res
console.log(Array.from("Hitesh")) //make array from the seq elements
console.log(Array.from({name: "hitesh"})) // interesting
empty as you have to specify whether to make from key or with value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//make array
