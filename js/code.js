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