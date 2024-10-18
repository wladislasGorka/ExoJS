// let personne = {
//     sexe: '',
//     age: '',
// }

function personne(sexe,age){
    this.sexe = sexe;
    this.age = age;
}

function estImposable(personne){
    if(personne.sexe === "H" && personne.age>=18){
        return true;
    }else if(personne.sexe === "F" && personne.age>=18 && personne.age<=35){
        return true;
    }else{
        return false;
    }
}

function calculTaux(personne){
    let taux = 0;

    if(personne.sexe === "H" && personne.age>=18){
        taux = personne.age * 0.1;
        return taux;
    }else if(personne.sexe === "F" && personne.age>=18 && personne.age<=35){
        if(personne.age<25){
            taux = personne.age * 0.08;
        }else{
            taux = personne.age * 0.05;
        }
    }
    return taux;
}

const personne1 = new personne('H',18);
const personne2 = new personne('F',20);
const personne3 = new personne('F',35);
const personne4 = new personne('H',12);
const personne5 = new personne('H',50);

// console.log(estImposable(personne1));
// console.log(estImposable(personne2));
// console.log(estImposable(personne3));
// console.log(estImposable(personne4));

console.log("Taux d'imposition (" + personne1.sexe + personne1.age +"): " + calculTaux(personne1) + "%");
console.log("Taux d'imposition (" + personne2.sexe + personne2.age +"): " + calculTaux(personne2) + "%");
console.log("Taux d'imposition (" + personne3.sexe + personne3.age +"): " + calculTaux(personne3) + "%");
console.log("Taux d'imposition (" + personne4.sexe + personne4.age +"): " + calculTaux(personne4) + "%");
console.log("Taux d'imposition (" + personne5.sexe + personne5.age +"): " + calculTaux(personne5) + "%");