function calculPrix(n){
    let prix = 0;
    let photocopie = 0;

    while(photocopie<n){
        photocopie++;
        if(photocopie < 11){
            prix += 0.1;            
        }
        else if(photocopie < 31){
            prix += 0.09;
        }
        else{
            prix += 0.08;
        }
    }
    prix=prix.toFixed(2);

    console.log(`Prix de ${n} photocopie: ${prix}€`)
    return prix;
}

calculPrix(5);
calculPrix(20);
calculPrix(40);