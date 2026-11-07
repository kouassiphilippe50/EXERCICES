// AFFICHEZ L'AGE ET LE PRIX DE CHAQUE PERSONNE
let recettetotale = 0;
let nombreEnfants= 0;
let nombreAdultes = 0;
let billet = 1500;
let billet2500 = 2500;

for(let age=11 ; age<=20;age++){
    if(age<16){
        console.log(`age : ${age} ans , prix du billet : ${billet}`)
    recettetotale+=billet;
    nombreEnfants++;
    } else{
        console.log(`age : ${age} ans , prix du billet : ${billet2500}`)
    recettetotale+=billet2500;
    nombreAdultes++;    
    }
}
// LA RECETTE TOTALE
console.log(`la recette totale est : ${recettetotale}`)
// LE NOMBRE DE BILLETS
console.log(`le nombre de billets de 1500 est ${nombreEnfants}`)
console.log(`le nombre de billets de 2500 est ${nombreAdultes}`)
