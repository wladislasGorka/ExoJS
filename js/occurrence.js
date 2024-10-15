function compteOcc(mot,lettre){
    const occ = [];

    for(let i=0; i<mot.length; i++){
        if(mot[i]===lettre){
            occ.push(i);
        }
    }
    
    return occ;
}

let mot = "AZSXZEDX";
let lettre = 'X';
let occ = compteOcc(mot,lettre);

console.log(`Dans ${mot}, ${lettre} est présent au rang(s): ${occ}`);
