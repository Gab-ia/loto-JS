let numeros = [] ;
let etoiles = [] ;

while (numeros.length < 5) {
    let tirage = Math.ceil(Math.random() * 50);
        if (numeros.indexOf(tirage) == -1) { 
            numeros.push(tirage) ;
        }
}

while (etoiles.length < 2) {
    let tirageEtoile = Math.ceil(Math.random() * 12);
        if (etoiles.indexOf(tirageEtoile) == -1) { 
            etoiles.push(tirageEtoile) ;
        }
}



numeros.forEach((tirage, index) => {
    setTimeout(() => {
        let numeroTire = document.createElement("numeroTire");

        numeroTire.textContent = tirage;

        numeroTire.classList.add('numeroTire') ;
        numeroTire.classList ;
        affichage.style.textAlign = 'center' ;

        affichage.appendChild(numeroTire);
        
    }, index * 2000);
});
    
etoiles.forEach((tirageEtoile, index) => {
    setTimeout(() => {
        let etoileTiree = document.createElement("etoileTiree");

        etoileTiree.textContent = tirageEtoile;

        etoileTiree.classList.add('etoileTiree')

        affichage.appendChild(etoileTiree);

    }, 10000 + index * 2000);
});


//while ()
// bloc de condition, utiliser while pour que math.random tire des nombres jusqu'à ce que le tableau soit full

//Math.ceil
// arrondit un nombre x à l'entier supérieur :: console.log(Math.ceil(4.2));  =>  Affiche 5

//Math.random
// fait un tirage random entre 0 et 1  ===> utiliser la commande là :: let tirage = Math.ceil(Math.random() * 50);

//.indexOf
// faire en sorte qu'un même numéro ne sorte qu'une seule fois utiliser ça :: let index = tableau.index(numérotableau);
// l'index passera à -1 s'il n'a pas trouvé le nombre recherché

//.push
// pour mettre les nombres dans le tableau :: tableau.push(nombre1, nombre2, nombre3, ...)

//setTimeout()
// faire le temps de décalage dans le tirage :: setTimeout(fonction,delai en millisecondes) ;
