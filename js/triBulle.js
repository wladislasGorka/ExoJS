const list = [1,11,5,21,3,2,144,10];

/////////////////////////////////////////////////////////////////////
function triBulle(list){
    for(let j=0; j<(list.length-1); j++){
        for(let i=(list.length - 1); i>0; i--){
            if(list[i-1]>list[i]){
                let temp = list[i];
                list[i] = list[i-1];
                list[i-1] = temp;
            }
        }
    }
    
    return list;
}

/////////////////////////////////////////////////////////////////////
function triSelection(list){
    let idPlusPetit = 0;

    for(let i=0; i<list.length; i++){
        idPlusPetit = i;
        for(let j=i+1; j<list.length; j++){
            //console.log(list[j+1]+" est plus petit que "+list[idPlusPetit]+" = "+ (list[j+1]<list[idPlusPetit]));
            if(list[j]<list[idPlusPetit]){
                idPlusPetit = j;
            }
        }
        let temp = list[i];
        list[i] = list[idPlusPetit];
        list[idPlusPetit] = temp;        
    }

    return list;
}

/////////////////////////////////////////////////////////////////////
function triRapide(list){
    let listTemp = [];

    if(list.length===0){
        return listTemp;
    }

    let pivot = list[list.length-1];
    if(list.length===1){
        listTemp.push(pivot);
        return listTemp;
    }
    
    let gauche = [];
    let droite = [];

    for( let i=0; i<list.length-1; i++){
        if(list[i]<=pivot){
            gauche.push(list[i]);
        }else{
            droite.push(list[i]);
        }
    }
    
    listTemp.push(pivot);
    list = triRapide(gauche).concat(listTemp,triRapide(droite));
    
    //console.log(list);
    return list;
}

console.log(list);
//console.log(triBulle(list));
//console.log(triSelection(list));
console.log(triRapide(list));
