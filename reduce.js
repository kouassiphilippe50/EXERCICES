// reduce : permet de retourner un seul resultat en menant une operation incluant tout les elements du tableau
const nombres=[2,3,4];
const total=nombres.reduce((acc,n)=>acc+n,0);// le ( 0 ) est la valeur de depart pour les calculs ex: 0+2;2+3;5+4
console.log(total)

// l'index est la position des elements dans le nombres [2];tableau, il commence par 0
.length //retourne la taille du tableau 