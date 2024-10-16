function compteOcc(mot,lettre){
    const occ = [];

    for(let i=0; i<mot.length; i++){
        if(mot[i]===lettre){
            occ.push(i);
        }
    }
    
    return occ;
}

// let mot = "AZSXZEDX";
// let lettre = 'X';
// let occ = compteOcc(mot,lettre);

// console.log(`Dans ${mot}, ${lettre} est présent au rang(s): ${occ}`);


////////////////////////////////////////////////////////////////////////////////////
// Avec IndexOf()

function compteOccID(mot,lettre){
    const occ = [];
    let index = 0;

    while(index<mot.length){
        index = mot.indexOf(lettre,index);
        if(index<0){
            return occ;
        }
        occ.push(index);
        index++;
    }

    return occ;
}

let mot = "AZSXZEDX";
let lettre = 'X';
let occ = compteOccID(mot,lettre);

console.log(`Dans ${mot}, ${lettre} est présent au rang(s): ${occ}`);