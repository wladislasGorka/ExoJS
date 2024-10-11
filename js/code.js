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

function generatePlaque(n){
    let plaque = "";
    for(let j = 0; j<n; j++){
        //réinitialise la variable plaque
        plaque = "";

        //génération de la plaque
        plaque += generateLetter(2);
        plaque += "-"
        plaque += generateNumber(3);
        plaque += "-"
        plaque += generateLetter(2);

        //si la plaque est unique on l'ajoute à la liste sinon on en génère une nouvelle
        if(isUnique(plaque)){
            plaques.push(plaque);
        }else{
            console.log(plaque + " already exist!")
            j--;
        }
    }
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
    for(let i=0; i<plaques.length; i++){
        if(numPlaque===plaques[i]){
            return false;
        }
    }
    return true;
}

generatePlaque(10);
console.log(plaques);
// console.log(isUnique("AS-123-AS"));