// let conducteur = {
//     prenom: '',
//     nom: '',
//     age: '',
//     datePermis: '',
//     nbAccident: '',
//     dateAssurance: '',
//     tarif: '',
// };

const tarifs = ['A','B','C','D','Refusé']

function Conducteur(prenom,nom,age,datePermis,nbAccident,dateAssurance){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.datePermis = datePermis;
    this.nbAccident = nbAccident;
    this.dateAssurance = dateAssurance;
}

function calculTarif(conducteur) {
    let tarifFamille = 0;
    let tarif = 0;

    if(!isMajeur(conducteur.age) && isJeuneConducteur(conducteur.datePermis)){
        switch(conducteur.nbAccident){
            case 0:
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }
    else if((!isMajeur(conducteur.age) && !isJeuneConducteur(conducteur.datePermis)) || (isMajeur(conducteur.age) && isJeuneConducteur(conducteur.datePermis))){
        switch(conducteur.nbAccident){
            case 0:
                tarifFamille = 2;
                break;
            case 1:
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }
    else{
        switch(conducteur.nbAccident){
            case 0:
                tarifFamille = 1;
                break;
            case 1:
                tarifFamille = 2;
                break;
            case 2:
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }

    if(isfidele){
        tarif = tarifs[tarifFamille-1];
    }else{
        tarif = tarifs[tarifFamille];
    }

    conducteur.tarif = tarif;
    return tarif;
}

function isMajeur(age){
    if(age<25){
        return false;
    }
    else{
        return true;
    }
}

function isJeuneConducteur(datePermis){
    if(datePermis<2){
        return true;
    }
    else{
        return false;
    }
}

function isfidele(dateAssurance){
    if(dateAssurance<1){
        return false;
    }
    else{
        return true;
    }
}

function ajoutConducteur(conducteur){
    let table = document.getElementById("tableauConducteur");
    let newRow = document.createElement("tr");

    let newDataPrenom = document.createElement("td");
    newDataPrenom.innerHTML = conducteur.prenom;
    let newDataNom = document.createElement("td");
    newDataNom.innerHTML = conducteur.nom;
    let newDataAge = document.createElement("td");
    newDataAge.innerHTML = conducteur.age;
    let newDataDatePermis = document.createElement("td");
    newDataDatePermis.innerHTML = conducteur.datePermis;
    let newDataNbAccident = document.createElement("td");
    newDataNbAccident.innerHTML = conducteur.nbAccident;
    let newDataDateAssurance = document.createElement("td");
    newDataDateAssurance.innerHTML = conducteur.dateAssurance;
    let newDataTarif = document.createElement("td");
    newDataTarif.innerHTML = conducteur.tarif;

    newRow.appendChild(newDataPrenom);
    newRow.appendChild(newDataNom);
    newRow.appendChild(newDataAge);
    newRow.appendChild(newDataDatePermis);
    newRow.appendChild(newDataNbAccident);
    newRow.appendChild(newDataDateAssurance);
    newRow.appendChild(newDataTarif);

    table.appendChild(newRow);

}

const conducteur1 = new Conducteur("Jean","Dupont",23,0,1,0);
const conducteur2 = new Conducteur("Jeanne","Dupont",26,5,0,0);

console.log(conducteur1.prenom);
calculTarif(conducteur1);
console.log(conducteur1.tarif);

console.log(conducteur2.prenom);
calculTarif(conducteur2);
console.log(conducteur2.tarif);

ajoutConducteur(conducteur1);
ajoutConducteur(conducteur2);


