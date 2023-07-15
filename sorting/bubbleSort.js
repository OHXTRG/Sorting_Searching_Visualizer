//                       bubble sort function


function bubbleSort(array){
    const moves = [];
    let i;
    let j;
    for( i = 0 ; i < array.length ; i++){   
        for( j = 0 ; j < array.length-1-i ; j++){
            moves.push({indices:[j,j+1],type:"comp"});
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                moves.push({indices:[j,j+1],type:"swap"}); // here we push array of size two as each element of moves 
            }
        }
        var a = [] ;
        for(let k = j ; k < array.length ; k++){
            a.push(k);
        }
        moves.push({indices:a,type:"sorted"});
        
    }
    // do{    // bubble sort function in javascript 
    //     var swap = false;
    //     for(let i = 1 ; i < array.length ; i++){
    //         if(array[i-1]>array[i]){
    //             swap = true;
    //             moves.push([i-1,i]);
    //             [array[i-1],array[i]] = [array[i],array[i-1]];
    //         }
    //     }
    // }while(swap);
    return moves;
}