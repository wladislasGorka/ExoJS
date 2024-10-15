const tourInitiale = [];
const tourIntermediaire = [];
const tourFinale = [];

let nbDisque = 0;
let nbCoup = 0;

const form = document.getElementById('formJeu');
// Add a submit event listener
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    let n = form.elements['nbDisque'].value;
    hanoi(n);
});

function hanoi(n){
    console.clear();
    init(n); 

    
}

function init(n){
    let disque = 1;

    //Remise à zéro du jeu
    tourInitiale.length = 0;
    tourIntermediaire.length = 0;
    tourFinale.length = 0;
    nbDisque = n;
    nbCoup = 0;

    //On rempli la première tour avec les n disques
    for(let i=n; i>0; i--){
        tourInitiale[i-1] = disque;
        disque++;
    }
}

function move(T1,T2){
    if(T1.length===0){
        return false;
    }
    else if(T1===T2){
        return false;
    }
    else{
        if(T1[T1.length-1]>T2[T2.length-1]){
            return false;
        }
        else{
            T2.push(T1[T1.length-1]);
            T1.pop();
            nbCoup++;
            
            printHanoi();

            console.log(nbDisque+" - "+tourFinale.length);
            console.log(estFini());
        }
    }

    return true;
}

function estFini(){
    if(tourFinale.length === nbDisque){
        console.log("Gagné !!!");
        return true;
    }
    return false;
}

function printHanoi(){
    console.log(`Coup ${nbCoup}:`);
    console.log(tourInitiale);
    console.log(tourIntermediaire);
    console.log(tourFinale);
}

// hanoi(3);
// printHanoi();
// move(tourInitiale,tourFinale);
// move(tourInitiale,tourIntermediaire);
// move(tourFinale,tourIntermediaire);
// move(tourInitiale,tourFinale);
// move(tourIntermediaire,tourInitiale);
// move(tourIntermediaire,tourFinale);
// move(tourInitiale,tourFinale);
