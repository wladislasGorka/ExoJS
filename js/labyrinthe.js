const labyrinthe = [[1,1,1,0,0],
                    [0,0,1,0,0],
                    [1,1,1,1,1],
                    [1,0,0,0,0],
                    [1,1,1,1,1]
];

const chemin = [];

function parcourir(labyrinthe,position,destination){
    chemin.push(position);
    
}


parcourir(labyrinthe,[0,0],[4,4]);