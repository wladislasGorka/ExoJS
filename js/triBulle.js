const list = [11,5,21,3,2,144,0];

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

console.log(list);
console.log(triBulle(list));
