let monCanard = "donald";

function canard(nbPate = 2, nbAile = 2){
    let maCanette = "daisy";
    let mesCanards = `${maCanette} et ${monCanard}`;

    // console.log(mesCanards);
    // return `${mesCanards} ont ${nbPate} pates et ${nbAile} ailes!`;
    return nbPate += nbAile;
}

console.log(canard(2,1));

let x = 1;
function f (){
    let x = 2;
    console.log("x= " + x);
}
console.log("x= " + x);
f();

//--------------------------------------
//
//generateur de plaque d'immatriculation
//
//--------------------------------------
const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
const plaques = [];

function generatePlaque(x=2,n=2,m=3){
    let plaque = "";
    for(let j = 0; j<x; j++){
        //réinitialise la variable plaque
        plaque = "";

        //génération de la plaque
        plaque += generateLetter(n);
        plaque += "-"
        plaque += generateNumber(m);
        plaque += "-"
        plaque += generateLetter(n);

        //si la plaque est unique on l'ajoute à la liste sinon on en génère une nouvelle
        if(isUnique(plaque)){
            plaques.push(plaque);
            let item = document.createElement("li");
            let list = document.getElementById("list");
            item.innerHTML = plaque;
            list.appendChild(item);

        }else{
            console.log(plaque + " already exist!")
            j--;
        }
    }
    return plaques;
}

function generateLetter(n){
    let letters = "";
    for(let i = 0; i<n; i++){
        letters += lettre.charAt(Math.floor(Math.random()*lettre.length));
    }
    return letters;
}
function generateNumber(n){
    let numbers = "";
    for(let i = 0; i<n; i++){
        numbers += nombre.charAt(Math.floor(Math.random()*nombre.length));
    }
    return numbers;
}

function isUnique(numPlaque){
    // for(let i=0; i<plaques.length; i++){
    //     if(numPlaque===plaques[i]){
    //         //console.log(numPlaque + " already exist!");
    //         return false;
            
    //     }
    // }
    for(let item in plaques){
        //console.log(plaques[item]);
        if(numPlaque===plaques[item]){
            console.log(numPlaque + " already exist!");
            return false;
            
        }
    }

    return true;
}

// let nbP = window.prompt();
// let nbL = window.prompt();
// let nbN = window.prompt();
//console.log(generatePlaque(20));
//console.log(isUnique("AZ-123-AZ"));

function startGenerate(){
    //liste de plaques remise à 0
    plaques.length = 0;
    //liste html remise à 0 (suppression des éléments li)
    let list = document.getElementById("list");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    //generation des plaques selon la valeur donner par l'utilisateur
    let nbPlaque = document.getElementById("nbPlaques").value;
    generatePlaque(nbPlaque);
}