                                        // counting sort 

function countingSort(array,animateArray){
    const animate = [...animateArray];
    const moves = [];                           // moves for recording 
    
    for(let i = 0 ; i < array.length ; i++){    // rounding off the elements of array for sorting 
        array[i] = Math.round(array[i]*20);
    }

    var largest = -999;
    for(let i = 0 ; i < array.length ; i++){    // finding largest element in the array 
        moves.push({indices:[i],type:"comp"});      
        if(array[i]>largest){
            largest = array[i];
            moves.push({indices:[i],type:"select"});
        }
    }

    newarray = Array(largest+1).fill(0);        // initializing array with 0

    for(let i = 0 ; i < array.length; i++){     // traversing given array and incrementing array[i] index of newarray 
        newarray[array[i]]++;
        moves.push({indices:[i],type:"count_divarray_elem"});
        moves.push({indices:[array[i]],type:"count_count_elem"});
    }

    const newarraylen = newarray.length;       // storing newarray length in a variable to pass to showbar function
    let c = 0;
    for(let i = 0 ; i < newarray.length ; i++){  // sorting given array according to newarray
        while(newarray[i]>0){
            array[c]= i;
            moves.push({indices:[c], height:[i] ,type:"sorted"});
            c++;
            newarray[i]--;
        }
    }
    animateCountingSort(moves,animate,newarraylen);
}


                        //  showing bars function 




copyNewArray_showBars = Array(21).fill(0);

function showBarsCountingSort(array,newarraylen,move){

    // creating divs 
    container.innerHTML="";
    document.getElementById("container").style.flexDirection = "column";
    document.getElementById("container").style.alignItems="center";
    const arraydiv = document.createElement("div");
    arraydiv.setAttribute('id','arraydiv');
    container.appendChild(arraydiv);
    const count = document.createElement("div");
    count.setAttribute('id','count');
    container.appendChild(count);
    const index = document.createElement("div");
    index.setAttribute('id','index');
    container.appendChild(index);


    // creating div for each array length 
    for(let i = 0 ; i < array.length ; i++){
        const arraydiv_elem = document.createElement("div");
        if(move && move.type=="sorted" && move.indices.includes(i)){
            array[i] = move.height;
            arraydiv_elem.style.backgroundImage="linear-gradient( #697184,red)";
        }
        arraydiv_elem.style.height=(array[i]*5)+"%";
        arraydiv_elem.classList.add("arraydiv_elem");
        const label = document.createElement("div");
        label.classList.add("label");
        label.innerHTML=array[i];
        if(move && move.type=="comp" && move.indices.includes(i)){
            arraydiv_elem.style.backgroundImage="linear-gradient( #697184,blue)";
        }
        if(move && move.type=="select" && move.indices.includes(i)){
            arraydiv_elem.style.backgroundImage="linear-gradient( #697184,green)";
        }
        if(move && move.type=="count_divarray_elem" && move.indices.includes(i)){
            arraydiv_elem.style.backgroundImage="linear-gradient( #697184,red)";
        }
        

        arraydiv_elem.appendChild(label);
        arraydiv.appendChild(arraydiv_elem);

    }
    


    //  creating div for newarray 
    for(let i = 0 ; i < newarraylen ; i++){
        const count_elem = document.createElement("div");
        count_elem.classList.add("count_elem");
        if(move && move.type=="count_count_elem" && move.indices.includes(i) ){
            count_elem.style.borderColor="red";
            copyNewArray_showBars[i]++;
        }
        if(move && move.type=="sorted" && move.height.includes(i) ){
            count_elem.style.borderColor="red";
            copyNewArray_showBars[i]--;
        }
        count_elem.innerHTML= copyNewArray_showBars[i] ;
        count.appendChild(count_elem);


        const index_elem = document.createElement("div");
        index_elem.classList.add("index_elem");
        index_elem.innerHTML=i;
        index.appendChild(index_elem);
    }
}



                                //  animate function 



 function animateCountingSort(moves,array,newarraylen){
    if(moves.length == 0 ){
        showBarsCountingSort(array,newarraylen);
        enableFirst();
        return;
    }
    if(reset){
        enableFirst();
        return;
    }
    const move = moves.shift();
    const [i] = move.indices;
    showBarsCountingSort(array,newarraylen,move);
    debugger;
    setTimeout(function(){
        animateCountingSort(moves,array,newarraylen);
    },speed);
}


