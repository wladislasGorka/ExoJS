const list = [11,5,21,3,2,144,0];

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
// function triRapide(list){

// }

console.log(list);
//console.log(triBulle(list));
console.log(triSelection(list));
