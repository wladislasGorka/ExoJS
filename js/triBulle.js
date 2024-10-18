function echanger(list,a,b){
    let temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}
/////////////////////////////////////////////////////////////////////
// function triBulle(list){
//     for(let j=0; j<(list.length-1); j++){
//         for(let i=(list.length - 1); i>0; i--){
//             if(list[i-1]>list[i]){
//                 let temp = list[i];
//                 list[i] = list[i-1];
//                 list[i-1] = temp;
//             }
//         }
//     }
    
//     return list;
// }
//presentation Agathe
// do while, si pas d'echange on stop

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
/* fonction de tri rapide en créant plusieurs listes (moins efficace)
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
} */

/////////////////////////////////////////////////////////////////////
// fonction de tri rapide fonctionnelle
function triRapide(list,low=0,hight=list.length-1){
    //cas de base
    if(low>hight){
        return;
    }
    //choix du pivot
    let pivot = list[hight];
    let i = low;

    for(let j=low; j<hight; j++){
        if(list[j]<pivot){
            echanger(list,i,j);
            i++; 
        }
    }
    //Deplace pivot
    echanger(list,i,hight);
    //appelle de la fonction de tri sur les elements de la liste avant le pivot puis ceux apres le pivot
    triRapide(list,low,i-1);
    triRapide(list,i+1,hight);
}

function triInsertion(list){
    let temp = 0;
    for(let i=1; i<list.length; i++){
        let k = i;
        temp = list[i];
        let j = i-1;
        while(j>0 && list[j]>temp){
                list[k] = list[j];
                k--;
                j--;
        }
        list[k]=temp;
    }
    return list;
}

const list1 = [1,11,5,21,3,2,144,10];
console.log("tri à Bulles:");
console.log(list1);
console.log(triBulle(list1));

const list2 = [1,11,5,21,3,2,144,10];
console.log("tri par Sélection:");
console.log(list2);
console.log(triSelection(list2));

const list3 = [1,11,5,21,3,2,144,10];
console.log("tri Rapide:");
console.log(list3);
triRapide(list3);
console.log(list3);

const list4 = [1,11,5,21,3,2,144,10];
console.log("tri par Insertion:");
console.log(list4);
console.log(triInsertion(list4));
