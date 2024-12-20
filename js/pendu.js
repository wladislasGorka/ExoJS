let nbParties = 0;
let nbPartiesGagnees = 0;

let mot_a_trouver = "";
let longueur = 0;
let erreurs_autorisees = 10;

let lettres_proposees = "";
let lettres_trouvees = "";
let mot_trouve = "";
let erreurs_commises = 0;
let score = [];

const imagesPendu =[
    "../images/pendu7.png",
    "../images/pendu6.png",
    "../images/pendu5.png",
    "../images/pendu4.png",
    "../images/pendu3.png",
    "../images/pendu2.png",
    "../images/pendu1.png",
    "../images/pendu0.png"
];

const messages =[
    "Tu es mon idole !!!", // Score 0
    "Presque parfait, juste une petite erreur.", // Score 1
    "Deux erreurs, tu t'en sors bien.", // Score 2
    "Trois erreurs, passable.", // Score 3
    "Quatre erreurs, ça commence à se voir.", // Score 4
    "Cinq erreurs, on est à la moitié.", // Score 5
    "Sept erreurs, attention, ça chauffe.", // Score 6
    "Huit erreurs, c'est pas fameux.", // Score 7
    "Neuf erreurs, fais semblant d'essayer au moins.", // Score 8
    "Dix erreurs, tu me dégoutes !!!", // Score 9
    "..." // Score 10
];

let lettre_proposee = "";
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    lettre_proposee = form.elements["inputLettre"].value;
    form.elements["inputLettre"].value = "";
    form.elements["inputLettre"].focus();

    if(estPresente(lettre_proposee,lettres_proposees)){
        document.getElementById("inputLettreLabel").innerHTML = "Lettre déjà proposée, choisis en une autre.";
    }else{
        lettres_proposees += lettre_proposee;
        document.getElementById("inputLettreLabel").innerHTML = "Lettre ? ("+lettres_proposees+")";
        let result = pendu();
        if(result>=0){
            finJeu();
        }
    }
})

function init(){
    //On choisit un mot au hasard
    mot_a_trouver = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //Taille du mot choisit
    longueur = mot_a_trouver.length;

    lettre_proposee = "";
    lettres_proposees = "";
    lettres_trouvees = "";
    mot_trouve = "";
    for( let i=0; i<longueur; i++){
        mot_trouve += "-";
    }
    console.log("");
    console.log("Mot à trouver: "+mot_trouve);
    erreurs_commises = 0;

    document.getElementById("inputLettreLabel").innerHTML = "Lettre ?";
    form.elements["inputLettre"].value = "";
    form.elements["inputLettre"].focus();
    document.getElementById("imgPendu").src = imagesPendu[0];

    document.getElementById("inputLettreLabel").style.display = "inline-block";
    document.getElementById("inputLettre").style.display = "inline-block";
    document.getElementById("inputLettreSubmit").style.display = "inline-block";
    document.getElementById("inputRejouer").style.display = "none";
    document.getElementById("inputStop").style.display = "none";
}

function pendu(){
    if(mot_trouve != mot_a_trouver && erreurs_commises<=erreurs_autorisees){        
        
        // Quand lettre est valide, on cherche si elle est présente dans le mot à trouver
        if(estPresente(lettre_proposee,mot_a_trouver)){
            //console.log("Lettre est dans le mot");
            lettres_trouvees += lettre_proposee;
            mot_trouve = lettre_placees(mot_a_trouver,lettres_trouvees);    
        }else{
            erreurs_commises++;
            console.log("On trace un trait de plus sur la potence");
            document.getElementById("imgPendu").src = imagesPendu[Math.min(erreurs_commises,imagesPendu.length-1)];
        }    
        console.log(mot_trouve);        
    }    
    if(mot_trouve === mot_a_trouver){
        console.log("");
        console.log("Gagné !");
        console.log(`Vous aviez droit à ${erreurs_autorisees} erreurs.`);
        console.log(messages[erreurs_commises]);
        nbParties++;
        nbPartiesGagnees++;
        score.push(erreurs_commises);
        return 1;
    }
    
    if(erreurs_commises>erreurs_autorisees){
        console.log("");
        console.log("Perdu !");
        console.log(`Vous n'aviez droit qu'à ${erreurs_autorisees} erreurs.`);
        nbParties++;
        score.push(erreurs_commises);
        return 0;
    }
    return -1;
}

function estPresente(lettre,mot){
    for(let i=0; i<mot.length; i++){
        if(mot[i] === lettre){
            return true;
        }
    }
    return false;
}

function lettre_placees(mot_complet,lettres_trouvees){
    
    // les string sont immutable, alors on transforme le string en tableau
    let motArr = mot_trouve.split('');
    for(let i=0; i<lettres_trouvees.length; i++){
        for(let j=0; j<mot_complet.length; j++){       
            if(lettres_trouvees[i] === mot_complet[j]){
                motArr[j] = mot_complet[j];
            }
        }
    }
    // le tableau est repassé en string
    mot_trouve = motArr.join('');
    return mot_trouve;

}

function jeu(){
    console.log("Nouvelle Partie:");
    init();
}

function finJeu(){
    // information de fin de partie
    console.log("");
    console.log("Résumé de la session:");
    console.log("Nombre de parties: "+nbParties);
    console.log("Nombre de parties gagnées: "+nbPartiesGagnees);
    let sommeScore = 0;
    for(let i=0; i<score.length; i++){
        sommeScore += score[i];
    }
    console.log("Score moyen: "+(Math.floor(sommeScore/score.length)));

    // gestion affichage des boutons
    document.getElementById("inputLettreLabel").style.display = "none";
    document.getElementById("inputLettre").style.display = "none";
    document.getElementById("inputLettreSubmit").style.display = "none";
    document.getElementById("inputRejouer").style.display = "inline-block";
    document.getElementById("inputStop").style.display = "inline-block";
}
function nouvellePartie(){
    console.log("");
    jeu();
}
function stop(){
    let result = minMax(score);
    console.log("");
    console.log("Meilleur performance: "+result[0]+" erreurs.");
    console.log("Pire performance: "+result[1]+" erreurs.");
    document.getElementById("inputRejouer").style.display = "none";
    document.getElementById("inputStop").style.display = "none";
    document.getElementById("imgPendu").src = imagesPendu[imagesPendu.length-1];

}
function minMax(Array){
    let min = 100;
    let max = 0;
    for(let i=0; i<Array.length; i++){
        if(Array[i]<min){
            min = Array[i];
        }
        if(Array[i]>max){
            max = Array[i];
        }
    }
    return [min,max];
}

console.log("Bienvenue dans le jeu du pendu!");
jeu();

