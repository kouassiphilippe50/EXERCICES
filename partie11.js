const TARIFDESENFANTS = 1500; // c'est le tarifs pour les enfants qui ont moins de 16 ans
const TARIFSDESADULTES = 2500; // c'est le tarifs pour les adultes qui ont plus de 16 ans

let recette = 0;
let nombreEnfants = 0;
let nombreAdultes = 0;

for (let age = 11; age <= 20; age++) {

  let prix;

  if (age < 16) {
    prix = TARIFDESENFANTS;
    nombreEnfants++;
  } else {
    prix =TARIFSDESADULTES ;
    nombreAdultes++;
  };

   recette += prix;{
  console.log(`Âge : ${age} ans -> Billet : ${prix} FCFA`);
}
}
console.log("-----------------------------");
console.log(`Recette totale : ${recette} FCFA`);
console.log(`Billets à 1 500 FCFA : ${nombreEnfants}`);
console.log(`Billets à 2 500 FCFA : ${nombreAdultes}`);