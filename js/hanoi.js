const tourInitial = [];
const tourIntermediare = [];
const tourFinal = [];

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
    init(n); 

    
}

function init(n){
    let disque = 1;

    //Remise à zéro du jeu
    tourInitial.length = 0;
    tourIntermediare.length = 0;
    tourFinal.length = 0;
    nbDisque = n;
    nbCoup = 0;

    //On rempli la première tour avec les n disques
    for(let i=n; i>0; i--){
        tourInitial[i-1] = disque;
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

            estFini();
        }
    }

    return true;
}

function estFini(){
    if(tourFinal.length === nbDisque){
        console.log("Gagné !!!");
        return true;
    }
    return false;
}

function printHanoi(){
    console.log(`Coup ${nbCoup}:`);
    console.log(tourInitial);
    console.log(tourIntermediare);
    console.log(tourFinal);
}

// hanoi(3);
// printHanoi();
// move(tourInitial,tourFinal);
// move(tourInitial,tourIntermediare);
// move(tourFinal,tourIntermediare);
// move(tourInitial,tourFinal);
// move(tourIntermediare,tourInitial);
// move(tourIntermediare,tourFinal);
// move(tourInitial,tourFinal);
