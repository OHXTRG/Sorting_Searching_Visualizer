
function search_binary(key,array){
    const moves = [];
    var left = 0;
    var right = array.length -1 ;
    var mid = parseInt((left+right)/2);
    console.log("enter in search");
    
    for(let i = 0 ; i < array.length ; i++){
        array[i] = Math.round(array[i]*100);
    }
    

    while(left<=right){
        moves.push({indices:[left,mid,right],type:"range"});
        moves.push({indices:[mid],type:"comp"});
        if(array[mid]==key){

            moves.push({indices:[mid],type:"find"});
            break;
        }else if(array[mid]>key){
            
            right = mid-1;
 
        }else{
            
            left = mid+1;

        }
        mid = parseInt((left+right)/2);
    }
    return moves;
}

function sort(array , left , right){
    if(right-left==1){
        return;
    } 

    var mid = parseInt((left+right)/2);

    sort(array , left , mid);
    sort(array , mid , right);

    return merge(array , left , mid , right);
}

function merge(array , left , mid , right){
    var i = left ;
    var j = mid ;
    var k  = 0 ;
    var mix = [];

    while(i < mid && j < right){
        if(array[i]<array[j]){
            mix[k] = array[i];
            k++;
            i++;
        }else{
            mix[k]=array[j];
            k++;
            j++;
        }
    }
    while(i<mid){
        mix[k] = array[i];
        i++;
        k++;
    }
    while(j<right){
        mix[k]=array[j];
        j++;
        k++;
    }

    for(let i = 0 ; i < mix.length ; i++){
        array[left+i] = mix[i];
    }
    return array;
}