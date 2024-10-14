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

const personne1 = new personne('H',18);
const personne2 = new personne('F',15);
const personne3 = new personne('F',30);
const personne4 = new personne('H',12);

console.log(estImposable(personne1));
console.log(estImposable(personne2));
console.log(estImposable(personne3));
console.log(estImposable(personne4));