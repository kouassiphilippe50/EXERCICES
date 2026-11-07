// 
let recettetotale = 0;
let nombreEnfants = 0;
let nombreAdultes = 0;
let nombreAdulte = 0;

let billet = 1500;
let billet2500 = 2500;
let billet2000 = 2000;

for(let age=11 ; age<=20;age++){
    if(age<16){
        console.log(`age : ${age} ans , prix du billet : ${billet} Fcfa`)
    recettetotale+=billet;
    nombreEnfants++;
    } 
    else if(age>=16 && age<=17){
        console.log(`age : ${age} ans , prix du billet : ${billet2500} Fcfa`)
    recettetotale+=billet;
    nombreAdultes++;
    }
    else{
        console.log(`age : ${age} ans , prix du billet : ${billet2000} Fcfa`)
    recettetotale+=billet2000;
    nombreAdulte++;    
    }
}

console.log(`la recette totale est : ${recettetotale}`)
console.log(`le nombre de billets de 1500 est ${nombretEnfants}`)
console.log(`le nombre de billets de 2500 est ${nombreAdultes}`)
console.log(`le nombre de billets de 2000 est ${nombreAdulte}`)