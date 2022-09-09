/*
Skriv ett konsol-pokemon program. Använd pokemon API:et för att uppnå detta. Man skall
minst kunna söka information på pokemons men lägg gärna till flera funktioner.
*/

async function getInfo(pokemon) {
    let response = await fetch ('https://pokeapi.co/api/v2/pokemon/' + pokemon);
    return response.json();
}

let promptSync = require('prompt-sync');
let prompt = promptSync();


let input = prompt("Skriv något: ");

let args = input.split(" ");
if (args.length <= 0) {
      console.log("Try again...");
}

let command = args[0].toLowerCase();

if (command === 'lookup') {
    if (args.length !== 2) {
        console.log("Format: lookup <pokemon>");   
    }

    getInfo(args[1]).then(console.log);
} else {
    console.log("No such command.");
}