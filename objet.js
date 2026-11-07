// references partagée
const personne={nom:`Awa`, age:20};

// const autre = personne;
const copie={...personne,age:22}; // synthaxe pour copier avant congement
// autre.age = 21;
console.log(personne.age);
// console.log(autre.age);
console.log(copie.age);

// les differentes methodes des objets
// keys donnes les noms
// entries donne les differnets paires 
// destructuration

// const{ nom,age} = personne;
console.log(Object.keys(personne));
//  la syntaxe keys donne les clés de l'objets
console.log(Object.entries(personne));
//  la syntaxe entries donne les paires de l'objets
// console.log(nom+ ` ` +age );

// les chaines en javascript, nous avons les (string, chaines et les chaines de caractère)
const a =`mangue`
console.log(a[2]);

// Nettoyer une saisie (trim sert a retirer les espaces) (touppercase rend le texte en majuscule)(inclues cherche un texte)
const saisie=`awa`;
const nom = saisie.trim().toUpperCase()
console.log(nom);
console.log(nom.includes(`WA`))

// JSON est utilis" pour envoyer des objets a travers le reseaux
// (JSON.stringify transforme un objet en texte) produit un texte
// JSON.parse reconstruit un texte

const b ={nom: `Awa`, age : 20};
const texte =JSON.stringify(b);
const recu = JSON.parse(texte);
console.log(texte);
console.log(recu.nom + ` ` + recu.age )

// alias ne cree pas de copie = 30
const c = {nom: `Awa`, age:20}
const alias = c;
alias.age = 30
console.log(c);


// Modifie une copie ( mettez l'age d la copie à 22), puis affichez les deux ages 
const pers={ nom: `Awa`, age: 20};
const copi ={...pers, age:22};
console.log(copi.age);
console.log(pers.age);

// transformer l'objet en texte
