 //            selection sort 

 function selectionSort(array){
    const moves = [];
    for(let i = 0 ; i < array.length ; i++){
        let min = i ; 
        for(let j = i + 1 ; j < array.length ; j++){
            moves.push({indices:[min,j],type:"comp"});
            if(array[min]>array[j]){
                min = j;
                moves.push({indices:[j],type:"select"});
            }else{
                moves.push({indices:[min],type:"select"});
            }
        }
        if(array[min]!=array[i]){
            let temp = array[i];
            array[i]=array[min] ;
            array[min] = temp;
            moves.push({indices:[min,i],type:"swap"});
        }
        var a = [];
        for(let j = 0 ; j  <= i ; j++){
            a.push(j);
        }
        moves.push({indices:a,type:"sorted"});
    }
    return moves;
 }