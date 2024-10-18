const etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];

const tableau = [
    { nom: "Alice", note: 85 },
    { nom: "benjamin", note: 92 },
    { nom: "Claire", note: 78 },
    { nom: "david", note: 88 },
    { nom: "Emma", note: 95 },
    { nom: "fabien", note: 67 },
    { nom: "Gabriel", note: 90 },
    { nom: "helene", note: 73 },
    { nom: "Isabelle", note: 82 },
    { nom: "jacques", note: 76 },
    { nom: "Kevin", note: 89 },
    { nom: "laura", note: 91 },
    { nom: "Marc", note: 84 },
    { nom: "nathalie", note: 79 },
    { nom: "Olivier", note: 87 },
    { nom: "pierre", note: 93 },
    { nom: "Quentin", note: 80 },
    { nom: "roxane", note: 77 },
    { nom: "Sophie", note: 94 },
    { nom: "thomas", note: 86 },
    { nom: "Ulysse", note: 81 },
    { nom: "valerie", note: 75 },
    { nom: "William", note: 83 },
    { nom: "xavier", note: 70 },
    { nom: "Yann", note: 88 },
    { nom: "zoe", note: 92 },
    { nom: "Adrien", note: 85 },
    { nom: "brigitte", note: 78 },
    { nom: "Camille", note: 89 },
    { nom: "damien", note: 91 },
    { nom: "Elise", note: 87 },
    { nom: "françois", note: 76 },
    { nom: "Gaëlle", note: 84 },
    { nom: "hugo", note: 93 },
    { nom: "Ingrid", note: 79 },
    { nom: "julien", note: 88 },
    { nom: "Karine", note: 82 },
    { nom: "lucas", note: 90 },
    { nom: "Mathilde", note: 95 },
    { nom: "nicolas", note: 77 },
    { nom: "Océane", note: 86 },
    { nom: "paul", note: 80 },
    { nom: "Quentin", note: 83 },
    { nom: "rachel", note: 75 },
    { nom: "Samuel", note: 92 },
    { nom: "thibault", note: 89 },
    { nom: "Ursula", note: 78 },
    { nom: "vincent", note: 91 },
    { nom: "Wendy", note: 87 },
    { nom: "xena", note: 76 },
    { nom: "Yasmine", note: 84 },
    { nom: "zacharie", note: 93 },
    { nom: "Amélie", note: 79 },
    { nom: "bruno", note: 88 },
    { nom: "Chloé", note: 82 },
    { nom: "dylan", note: 90 },
    { nom: "Estelle", note: 95 },
    { nom: "fabrice", note: 77 },
    { nom: "Géraldine", note: 86 },
    { nom: "henri", note: 80 },
    { nom: "Inès", note: 83 },
    { nom: "jean", note: 75 },
    { nom: "Kévin", note: 92 },
    { nom: "léa", note: 89 },
    { nom: "Mélanie", note: 78 },
    { nom: "nathan", note: 91 },
    { nom: "Ophélie", note: 87 },
    { nom: "patrick", note: 76 },
    { nom: "Quentin", note: 84 },
    { nom: "rémi", note: 93 },
    { nom: "Sarah", note: 79 },
    { nom: "théo", note: 88 },
    { nom: "Ugo", note: 82 },
    { nom: "valentin", note: 90 },
    { nom: "Wendy", note: 95 },
    { nom: "xavier", note: 77 },
    { nom: "Yohan", note: 86 },
    { nom: "zoé", note: 80 },
    { nom: "Antoine", note: 83 },
    { nom: "bernadette", note: 75 },
    { nom: "Cédric", note: 92 },
    { nom: "diane", note: 89 },
    { nom: "Élodie", note: 78 },
    { nom: "franck", note: 91 },
    { nom: "Guillaume", note: 87 },
    { nom: "hélène", note: 76 },
    { nom: "Isabelle", note: 84 },
    { nom: "jules", note: 93 },
    { nom: "Kevin", note: 79 },
    { nom: "laetitia", note: 88 },
    { nom: "Maxime", note: 82 },
    { nom: "nadine", note: 90 },
    { nom: "Olivier", note: 95 },
    { nom: "pascal", note: 77 },
    { nom: "Quentin", note: 86 },
    { nom: "romain", note: 80 },
    { nom: "Stéphanie", note: 83 },
    { nom: "thomas", note: 75 },
    { nom: "Ulysse", note: 92 },
    { nom: "valérie", note: 89 }
];

// const alphabet = [
//     { lettre: "A", code: 0},
//     { lettre: "a", code: 0},
//     { lettre: "à", code: 0},
//     { lettre: "B", code: 1},
//     { lettre: "b", code: 1},
//     { lettre: "C", code: 2},
//     { lettre: "c", code: 2},
//     { lettre: "D", code: 3},
//     { lettre: "d", code: 3},
//     { lettre: "E", code: 4},
//     { lettre: "e", code: 4},
//     { lettre: "J", code: 5},
//     { lettre: "j", code: 5},
//     { lettre: "K", code: 6},
//     { lettre: "k", code: 6},
//     { lettre: "L", code: 7},
//     { lettre: "l", code: 7},
//     { lettre: "W", code: 8},
//     { lettre: "w", code: 8},
//     { lettre: "Y", code: 9},
//     { lettre: "y", code: 9},
// ];

const majuscule = "ABCDEÈÉËFGHIJKLMNOPQRSTUVWXYZ";
const minuscule = "abcdeèéëfghijklmnopqrstuvwxyz";

const triEtudiants = [];

function noteSup(note){
    //Récupération des étudiants selon la note
    for(let i=0; i<etudiants.length; i++){
        if(etudiants[i]['note']>note){
            triEtudiants.push(etudiants[i]);
        }
    }
    
    //tri selon le nom
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
// Sans .localeCompare()
// triEtudiants[j].nom.toLowerCase()<triEtudiants[j+1].nom.toLowerCase();

function moyenne(listEtudiants){
    let somme = 0;
    for( let i=0; i<listEtudiants.length; i++){
        somme += listEtudiants[i].note;
    }
    return (somme / listEtudiants.length).toFixed(2);
}

// noteSup(15);
// console.log(triEtudiants);
// console.log("Moyenne: "+moyenne(triEtudiants));


// Normaliser une chaine de charactère (sans maj, sans accent et sans espace)
// let normalizeStr1 = str1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g,'').toLowerCase();

function triEtudiant(etudiants){
    let echange = false;

    do{
        echange = false;
        for(let i = 0; i<etudiants.length-1; i++){
            if(etudiants[i].nom>etudiants[i+1].nom){
                let temp = etudiants[i];
                etudiants[i] = etudiants[i+1];
                etudiants[i+1] = temp;
                echange = true;
            }
        }
    }while(echange); 
    
    return etudiants;
}




function retri(etudiants,note){
    //Récupération des étudiants selon la note
    for(let i=0; i<etudiants.length; i++){
        if(etudiants[i]['note']>note){
            triEtudiants.push(etudiants[i]);
        }
    }
    
    //tri selon le nom
    for(let i=0; i<triEtudiants.length-1; i++){
        for(let j=0; j<triEtudiants.length-1; j++){
            if(estApres(triEtudiants[j].nom,triEtudiants[j+1].nom)){
                let temp = triEtudiants[j];
                triEtudiants[j] = triEtudiants[j+1];
                triEtudiants[j+1] = temp;
            }
        }
    }

    return triEtudiants;
}

// comparaison entre deux noms, return true si nomA est avant nomB
function estApres(a,b){
    for(let i=0; i<a.length; i++){
        if(index(a[i]) === undefined){
            return true;
        }
        if(index(b[i]) === undefined){
            return false;
        }
        if(index(a[i])>index(b[i])){
            return true;
        }
        if(index(a[i])<index(b[i])){
            return false;
        }
    }
    return false;
}

// Trouve l'index de char dans le tableau majuscule ou minuscule
function index(char){
    for(let i=0; i<majuscule.length; i++){
        if(char===majuscule[i] || char===minuscule[i]){
            return i;
        }
    }
}

//console.log(triEtudiant(etudiants));

//console.log("emmanuel apres agathe? "+estApres("emmanuel","Agathe"));
//console.log("emmanuel apres Yohann? "+estApres("emmanuel","Yohann"));


console.log(retri(tableau,15));


