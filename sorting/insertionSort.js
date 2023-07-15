//       for insertion sort 

// function insertionSort(){
//     const moves= [];
//     for(let i = 1 ; i < array.length ; i++){
//         var current = array[i];
//         while(i>0){
//             if(array[i-1]>current){
//                 array[i] = array[i-1];
//                 i--;
//             }else{
//                 break;
//             }
//         }
//         array[i] = current;
//     }
// }

function insertionSort(array){
    const moves = [];
    moves.push({indices:[0],type:"sorted"});
    for(let i = 1 ; i < array.length ; i++){
        let j = i;
        while(j>0){
            moves.push({indices:[j,j-1],type:"comp"});
            if(array[j]<array[j-1]){
                let temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
                moves.push({indices:[j,j-1],type:"swap"});
                j--;
            }else{
                break;
            }
        }
        var a = [];
            for(let k = 0 ; k <= i ; k++){
                a.push(k);
            }
            moves.push({indices:a,type:"sorted"});
    }
    return moves;
}