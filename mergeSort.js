
var merge_moves = [];

function mergeSort(array , left , right){
    
    
    if(right-left==1){
        // console.log("end of recursion");
        return;
    }

    var mid = parseInt((left+right)/2);
    // console.log(left,mid,right,moves);
    // for left part 
    mergeSort(array,left , mid);
    // for right part 
    mergeSort(array , mid , right);

    mergearray(array , left , mid , right);

    console.log(merge_moves);

}

function mergearray(array , left , mid , right){
    var i = left ;
    var j = mid;
    var k = 0;
    var mix = [];

    while(i<mid && j<right){
        if(array[i]<array[j]){
            mix[k] = array[i];
            merge_moves.push({indices:[i],type:"comp_merge",range:[left,mid,right-1]});
            k++;
            i++;
        }else{
            mix[k]= array[j];
            merge_moves.push({indices:[j], type:"comp_merge",range:[left,mid,right-1]});
            k++;
            j++;
        }
    }
    while(i<mid){
        mix[k]= array[i];
        merge_moves.push({indices:[i],type:"comp_merge",range:[left,mid,right-1]});
        i++;
        k++;
    }
    while(j<right){
        mix[k] = array[j];
        merge_moves.push({indices:[j], type:"comp_merge",range:[left,mid,right-1]});
        j++;
        k++;
    }

    for(let i = 0 ; i < mix.length ; i++){
        var index = left + i ;
        array[index] = mix[i];
        merge_moves.push({indices:[index],height:[mix[i]],type:"sorted_merge",range:[left,mid,right-1]});
    }


}