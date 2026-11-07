// promise
console.log("ab")
const promesse = new promiseHooks((resolve, reject) =>{
    const succes = true
    settimeout( () =>{
        if (success){
            resolve("données reçues")
        }else{
            reject("Erreur réseau")
        }
    },5000)
})
promesse
    .then((resultat) =>{
        console.log(`succes : `,resultat)
    })
    .catch((Erreur) =>{
        console.log(`Erreur : `, resultat)
    })
    .finally( () =>{
        console.log(`Terminé ,quoi qu'il arrive`)
    })
