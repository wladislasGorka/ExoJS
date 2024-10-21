let mot_a_trouver = "";
let longueur = 0;
let erreurs_autorisees = 10;
let erreurs_commises = 0;


let lettres_trouvees = "";
let mot_trouve = "------";

function init(){
    //On choisit un mot au hasard
    mot_a_trouver = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //Taille du mot choisit
    longueur = mot_a_trouver.length;

    lettres_trouvees = "";
    mot_trouve = "";
    for( let i=0; i<longueur; i++){
        mot_trouve += "-";
    }
    erreurs_commises = 0;

}

function pendu(){
    init();

    while(mot_trouve != mot_a_trouver && erreurs_commises<erreurs_autorisees){
        // L'utilisateur choisit une lettre
        let lettre = window.prompt("Lettre ?");
    
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
    }else{
        console.log("Perdu !");
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
    
    let motArr = mot_trouve.split('');
    for(let i=0; i<lettres_trouvees.length; i++){
        for(let j=0; j<mot_complet.length; j++){       
            if(lettres_trouvees[i] === mot_complet[j]){
                //console.log(mot[j]+" "+mot_complet[j]);
                motArr[j] = mot_complet[j];
            }
        }
    }
    mot_trouve = motArr.join('');
    return mot_trouve;
}

pendu();