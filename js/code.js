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

//generateur de plaque d'immatriculation
const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
// console.log(lettre[2]);
let plaque = "";

for(let i = 0; i<2; i++){
    plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
}
plaque += "-"
for(let i = 0; i<3; i++){
    plaque += nombre.charAt(Math.floor(Math.random()*nombre.length));
}
plaque += "-"
for(let i = 0; i<2; i++){
    plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
}

console.log(plaque);