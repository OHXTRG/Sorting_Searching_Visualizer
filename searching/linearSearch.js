
function search_linear(array,key){
    // console.log("search is called");
    const moves =[];
    for(let i = 0 ; i < array.length ; i++){
        array[i] = Math.round(array[i]*100);
        console.log(array[i]);
        moves.push({indices:[i],type:"comp"});
        if(array[i]==key){
            moves.push({indices:[i],type:"find"});
            console.log("key is find");
            break;
        }
    }

    return moves;
}