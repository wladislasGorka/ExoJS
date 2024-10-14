// let conducteur = {
//     prenom: '',
//     nom: '',
//     age: '',
//     datePermis: '',
//     nbAccident: '',
//     dateAssurance: '',
//     tarif: '',
// };

//Les tarifs en vigueur
const tarifs = ['A','B','C','D','Refusé']

//objet conducteur
function Conducteur(prenom,nom,age,datePermis,nbAccident,dateAssurance){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.datePermis = datePermis;
    this.nbAccident = nbAccident;
    this.dateAssurance = dateAssurance;
    this.tarif = 'Refusé';
}

//calcul le tarif selon le conducteur en paramètre
function calculTarif(conducteur) {
    let tarifFamille = 0;

    if(!isMajeur(conducteur.age) && isJeuneConducteur(conducteur.datePermis)){
        switch(conducteur.nbAccident){
            case "0":
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }
    else if((!isMajeur(conducteur.age) && !isJeuneConducteur(conducteur.datePermis)) || (isMajeur(conducteur.age) && isJeuneConducteur(conducteur.datePermis))){
        switch(conducteur.nbAccident){
            case "0":
                tarifFamille = 2;
                break;
            case "1":
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }
    else{
        switch(conducteur.nbAccident){
            case "0":
                tarifFamille = 1;
                break;
            case "1":
                tarifFamille = 2;
                break;
            case "2":
                tarifFamille = 3;
                break;
            default:
                tarifFamille = 4;
                break;
        }
    }
    
    //Si le client est assuré depuis plus d'un ans
    if(isFidele(conducteur.dateAssurance)){
        conducteur.tarif = tarifs[tarifFamille-1];
    }else{
        conducteur.tarif = tarifs[tarifFamille];
    }

    return conducteur.tarif;
}

//Bool
function isMajeur(age){
    if(age<25){
        return false;
    }
    else{
        return true;
    }
}

//Bool
function isJeuneConducteur(datePermis){
    if(datePermis<2){
        return true;
    }
    else{
        return false;
    }
}

//Bool
function isFidele(dateAssurance){
    if(dateAssurance<2){
        return false;
    }
    else{
        return true;
    }
}

//Ajoute le conducteur a un tableau dans le html
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

//const conducteur1 = new Conducteur("Jean","Dupont",23,0,1,0);
//calculTarif(conducteur1);
//ajoutConducteur(conducteur1);


//gestion du formulaire
const form = document.getElementById('formCalculTarif');
// Add a submit event listener
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Do your form processing here (e.g., send data to a server)
    //console.log('Form submitted without page refresh');

    //Les valeurs du formulaire sont utilisées pour créer un nouveau conducteur
    const newConducteur = new Conducteur(
        form.elements['formPrenom'].value,
        form.elements['formNom'].value,
        form.elements['formAge'].value,
        form.elements['formDatePermis'].value,
        form.elements['formNbAccident'].value,
        form.elements['formDateAssurance'].value);

    
    console.log(newConducteur);
    //Calcul du tarif pour ce nouveau conducteur
    calculTarif(newConducteur);
    //Le conducteur est ajouté au tableau HTML
    ajoutConducteur(newConducteur);

    // Optionally, you can reset the form
    // form.reset();
});

// let today = document.getElementById('formDateToday');
// today.valueAsDate = new Date();
// document.getElementById('today').style.display = "none";

// a and b are javascript Date objects
// function dateDiffInDays(a, b) {
//     const _MS_PER_DAY = 1000 * 60 * 60 * 24;
//     // Discard the time and time-zone information.
//     const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
//     const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
//     return Math.floor((utc2 - utc1) / _MS_PER_DAY);
// }

// const a = new Date("2017-01-01"),
//     b = new Date("2017-07-25"),
//     difference = dateDiffInDays(a, b);
    
//console.log(difference + ' days');
//console.log(Date.now());
