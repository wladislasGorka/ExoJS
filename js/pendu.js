let nbParties = 0;
let nbPartiesGagnees = 0;

let mot_a_trouver = "";
let longueur = 0;
let erreurs_autorisees = 10;

let lettres_proposees = "";
let lettres_trouvees = "";
let mot_trouve = "";
let erreurs_commises = 0;

function init(){
    //On choisit un mot au hasard
    mot_a_trouver = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //Taille du mot choisit
    longueur = mot_a_trouver.length;

    lettres_proposees = "";
    lettres_trouvees = "";
    mot_trouve = "";
    for( let i=0; i<longueur; i++){
        mot_trouve += "-";
    }
    console.log("");
    console.log("Mot à trouver: "+mot_trouve);
    erreurs_commises = 0;

}

function pendu(){
    init();

    while(mot_trouve != mot_a_trouver && erreurs_commises<erreurs_autorisees){
        // L'utilisateur choisit une lettre
        if(lettres_proposees.length){
            console.log("Lettres déjà testées: "+lettres_proposees.split(','));
        }        
        let lettre = window.prompt("Lettre ?");
        
        // Controle de validité de la variable lettre
        while(lettre.length>1){
            lettre = window.prompt("ATTENTION: Une seule lettre à la fois!");
        }
        while(estPresente(lettre,lettres_proposees)){
            lettre = window.prompt("Lettre déjà proposée, choisis en une autre.");
        }
        lettres_proposees += lettre;
        
        // Quand lettre est valide, on cherche si elle est présente dans le mot à trouver
        if(estPresente(lettre,mot_a_trouver)){
            //console.log("Lettre est dans le mot");
            lettres_trouvees += lettre;
            mot_trouve = lettre_placees(mot_a_trouver,lettres_trouvees);
    
        }else{
            erreurs_commises++;
            console.log("On trace un trait de plus sur la potence");
        }
    
        console.log(mot_trouve);
    }
    
    if(mot_trouve === mot_a_trouver){
        console.log("Gagné !");
        console.log(`Vous aviez droit à ${erreurs_autorisees} erreurs.`);
        console.log(`Vous avez fait ${erreurs_commises} erreurs.`);
        nbParties++;
        nbPartiesGagnees++;
        return 1;
    }else{
        console.log("Perdu !");
        console.log(`Vous n'aviez droit qu'à ${erreurs_autorisees} erreurs.`);
        nbParties++;
        return 0;
    }
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

    console.log("Bienvenue dans le jeu du pendu!");
    pendu();

    let encore = "1";
    do{
        encore = window.prompt('Encore? 1:oui 0:non');
        if(encore === "1"){
            pendu();
        }
    }while(encore === "1")

    
    console.log("");
    console.log("Résultat de la session:");
    console.log("Nombre de parties: "+nbParties);
    console.log("Nombre de parties gagnées: "+nbPartiesGagnees);
    console.log("");
    console.log("Au revoir");
}

jeu();
