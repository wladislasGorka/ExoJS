// Avec repeat
// function printEtoiles(n){

//     if(n){
//         printLigne(n);
//     }else{
//         return;
//     }

//     printEtoiles(n-1);
// }

// function printEtoilesReverse(n){

//     let nbEtoiles = 0;

//     while(nbEtoiles<=n){
//         printLigne(nbEtoiles);
//         nbEtoiles++;
//     }
// }

// function printLigne(n){
//     console.log('*'.repeat(n));
// }

// printEtoiles(10);
// printEtoilesReverse(10);


// Sans repeat
function printEtoiles(n){

    let etoiles = '';

    if(n){
        for(let i=0; i<n; i++){
            etoiles += '*';
        }
        console.log(etoiles);
    }else{
        return;
    }

    printEtoiles(n-1);
}
printEtoiles(10);


function printEtoilesReverse(n){

    let nbEtoiles = 1;
    let etoiles = '';

    while(nbEtoiles<=n){
        etoiles = '';
        for(let i=0; i<nbEtoiles; i++){
            etoiles += '*';
        }
        console.log(etoiles);
        nbEtoiles++;
    }
}
printEtoilesReverse(10);


// function printMosaique(nbColonne,nbLigne){
//     let lignesCount = 0;
//     let ligne = '';

//     while(lignesCount<nbLigne){
//         ligne = '';
//         if(lignesCount % 2){
//             for(let i=0; i<nbColonne; i++){
//                 if(i % 2){
//                     ligne += '#';
//                 }else{
//                     ligne += '*';
//                 }
//             }
//             console.log(ligne);            
//         }else{
//             for(let i=0; i<nbColonne; i++){
//                 if(i % 2){
//                     ligne += '*';
//                 }else{
//                     ligne += '#';
//                 }
//             }
//             console.log(ligne);            
//         }
//         lignesCount++;
//     }    
// }

function printMosaique(n,m){
    for(let i=0; i<n; i++){
        let ligne = '';
        for(let j=0; j<m; j++){
            if((i+j)%2){
                ligne += '*';
            }
            else{
                ligne += '#';
            }
        }
        console.log(ligne);
    }
}

printMosaique(6,10);