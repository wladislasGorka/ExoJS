function estPalindrome(mot){
    //console.log(Math.floor(mot.length / 2));
    for(let i=0; i<(Math.floor(mot.length / 2)); i++){
        if(!(mot[i]===mot[mot.length-1-i])){
            return false;
        }
    }
    return true;
}

// presentation Kaique
// .split() .reverse() .join()

// presentation Sylvain
// toLowerCase pour les mots avec majuscule


console.log(estPalindrome("anna"));
console.log(estPalindrome("antona"));
console.log(estPalindrome("lamarieeiramal"));

////////////////////////////////////////////////////////////////////////////////////
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function decal(mot){
    let motUp = mot.toUpperCase();
    let newMot = '';
    for(let i=0; i<mot.length; i++){
        let j = 0;
        while(motUp[i]!=alphabet[j]){            
            j++;
        }
        //console.log(mot[i]+ " " +alphabet[(j+3)%26]);
        newMot += alphabet[(j+3)%26];
    }
    return newMot;
}
//marche pas si caractère hors de alphabet

const mot = "BananeX";
console.log(mot);
console.log(decal(mot));

////////////////////////////////////////////////////////////////////////////////////

function mouah(n){
    let mouah = "mouah";
    for(let i=0; i<n; i++){
        mouah += "ah";
    }
    return mouah;
}

console.log(mouah(0));
console.log(mouah(2));
console.log(mouah(10));