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