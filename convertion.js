// const {NumberToletter} = require(`convertir-nombre-lettre`);
// const prompt = require(`prompt-sync`);
// let nombre = prompt(`Entrer un nombre : `);
// console.log(`vous avez entré : `, nombre);
// console.log(NumberToletter(nombre));

// syntaxe pour demander a l'utilisateur de nous donnez des informations
const readline = require("readline");
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("entrer votre nom : ", function(nom){
    console.log(`bonjour ${nom}`);
    rl.close();
})