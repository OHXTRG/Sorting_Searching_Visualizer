
const quick_moves = [] ;

function quickSort(array , left , right){
    
    if(left>=right) return;

    let pindex = parseInt(partition(array , left ,right  ));

    // left part 
    quickSort(array , left , pindex-1);
    // right part 
    quickSort(array , pindex+1 , right);
    // return moves;
}

function partition(array , left , right ){
    
    let pivot = array[right];
    let i = left - 1 ;

    for(j = left  ; j <= right ; j++){
        if(array[j]<pivot){
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            quick_moves.push({indices:[i,j] , type:"swap" , range:[left , right] , pivot:[right]})
        }
    }

    i++;
    let temp = array[right];
    array[right] = array[i] ;
    array[i] = temp;
    quick_moves.push({indices:[i,right] , type:"pswap" , range:[left , right] , pivot:[i]});

    // let temp = array[i] ;
    // array[i] = array[right] ;
    // array[right] = temp;
    return  i;
}