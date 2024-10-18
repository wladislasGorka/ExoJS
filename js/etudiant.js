const etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wladislas', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'Emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];

const triEtudiants = [];

function noteSup(note){

    for(let i=0; i<etudiants.length; i++){
        if(etudiants[i]['note']>note){
            triEtudiants.push(etudiants[i]);
        }
    }
    
    for(let i=0; i<triEtudiants.length-1; i++){
        for(let j=0; j<triEtudiants.length-1; j++){            
            //console.log(triEtudiants[j].nom + " " + triEtudiants[j+1].nom);
            //console.log(triEtudiants[j].nom.localeCompare(triEtudiants[j+1].nom));
            if((triEtudiants[j].nom.localeCompare(triEtudiants[j+1].nom))===1){
                let temp = triEtudiants[j];
                triEtudiants[j] = triEtudiants[j+1];
                triEtudiants[j+1] = temp;
            }
        }
    }
}

function moyenne(listEtudiants){
    let somme = 0;
    for( let i=0; i<listEtudiants.length; i++){
        somme += listEtudiants[i].note;
    }
    return (somme / listEtudiants.length).toFixed(2);
}

noteSup(15);
console.log(triEtudiants);
console.log("Moyenne: "+moyenne(triEtudiants));


// Normaliser une chaine de charactère (sans maj, sans accent et sans espace)
// let normalizeStr1 = str1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'').toLowerCase();

