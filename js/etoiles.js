function printEtoiles(n){

    if(n){
        printLigne(n);
    }else{
        return;
    }

    printEtoiles(n-1);
}

function printEtoilesReverse(n){

    let nbEtoiles = 0;

    while(nbEtoiles<=n){
        printLigne(nbEtoiles);
        nbEtoiles++;
    }
}

function printLigne(n){
    console.log('*'.repeat(n));
}

printEtoiles(10);
printEtoilesReverse(10);