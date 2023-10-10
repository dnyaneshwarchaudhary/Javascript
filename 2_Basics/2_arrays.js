const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["superman","flash","batman"];

//  marvel_heros.push(dc_heros);
//console.log(marvel_heros); //makes changes on existing array

//const allheros = marvel_heros.concat(dc_heros);
//console.log(allheros);

const allnewheroes = [...marvel_heros, ...dc_heros]; //spread operator 
console.log(allnewheroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realanotherarray = another_array.flat(Infinity);
console.log(realanotherarray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "hitesh"})); //interesting

