// const ages = [12,18,25,9,40];
// const majeurs = ages.find(a=> a >=18);
// // "=>" est une fonction fleché qui  
// console.log(majeurs);
// console.log(ages);


// // avec filter
// const any = ages.filter(a=> a >=18);
// console.log(majeurs);
// console.log(ages)

// (map)
function factorielle(n) {
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
const notes =[2,1,7,4,8];
const doubles = notes.map(factorielle)
console.log(doubles)