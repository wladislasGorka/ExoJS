function compteOcc(mot,lettre){
    const occ = [];

    for(let i=0; i<mot.length; i++){
        if(mot[i]===lettre){
            occ.push(i);
        }
    }
    
    return occ;
}


console.log(compteOcc("AZSXZEDX",'Z'));
