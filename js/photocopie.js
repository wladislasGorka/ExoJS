// function calculPrix(n){
//     let prix = 0;
//     let photocopie = 0;

//     while(photocopie<n){
//         photocopie++;
//         if(photocopie < 11){
//             prix += 0.1;            
//         }
//         else if(photocopie < 31){
//             prix += 0.09;
//         }
//         else{
//             prix += 0.08;
//         }
//     }
//     prix=prix.toFixed(2);

//     console.log(`Prix de ${n} photocopie: ${prix}€`)
//     return prix;
// }

function calculPrix(n){
    let prix = 0;
    if(n<=10){
        prix = n * 0.1;
    }else if(n<=30){
        prix = (10 * 0.1) + ((n - 10) * 0.09);
    }else{
        prix = (10 * 0.1) + (20 * 0.09) + ((n - 30) * 0.08);
    }
    prix = prix.toFixed(2);

    console.log(`prix pour ${n} photocopie: ${prix}€`);
    return prix;
}

calculPrix(5);
calculPrix(20);
calculPrix(31);

// presentation Yannick
// gestion du cas n<0

//////////////////////////////////////////////////////////////////////////////
function calcPrixKm(km,nbPassager){
    let prixTotal = ((km * 0.6) - (nbPassager * 0.5)).toFixed(2);
    let prixPassager = (prixTotal/nbPassager).toFixed(2);
    return console.log(`Prix total: ${prixTotal}€; Prix par passager: ${prixPassager}€`);
}

calcPrixKm(70,4);