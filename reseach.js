// // for affiche les nombres de 1 à 5
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }
// while affiche les nombres de 1 à 5 
// let i = 4000// f/semaine;
// let s = 1 // / nombre de semaine
// while ( i <= 50000){
//     s = s+1;console.log(i);
//     i+=4000;
// }
// console.log (`nombre de semaine : ${s}`);


// correction exo
const GTA6 = 50000;
let epargne = 0;
let i = 0;
while (epargne <= GTA6){
    epargne=epargne+4000;
    i++;
}
console.log(epargne)
console.log(i)
console.log(`le nombre de semaine : ${i} pour obtenir ${GTA6} Fcfa`)// FCFA