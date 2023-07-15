//        main script 

var array = [];
let reset = true;

sizeOfArray();

                    // function to change size of array 
function sizeOfArray(){
    const size = document.getElementById("size").value;
    init(size);
}

                    // function to change the speed sorting 
var speed = 350;
function speedOfArray(){
    const newspeed = document.getElementById("speed").value;
    const temp = document.getElementById("speed").max;
    speed = temp - newspeed + 100 ;
    console.log(speed);
}



                            // create random array of given size and show it
function init(n){
   const newarray = [];
    merge_moves = [];                
    for(let i = 0 ; i < n ; i++){
        newarray[i] = Math.random();
    }
    array = newarray;
    showbars();
    
}


                            // unsort the current array 
function unsort(){
    reset = true ;
    merge_moves = [];
    console.log("reset is called");
    for(let i = 0 ; i < array.length ; i++){
        array[i] = Math.random();
    }
    showbars();
    enableFirst();
}


function visualize(){
     bubblecheck = document.getElementById("bubble").checked;
     selectcheck = document.getElementById("select").checked;
     insertcheck = document.getElementById("insert").checked;
     countingcheck = document.getElementById("counting").checked;
     mergecheck = document.getElementById("merge").checked;
     linearcheck = document.getElementById("linear").checked;
     binarycheck = document.getElementById("binary").checked;
    if(bubblecheck) playBubbleSort();
    else if(selectcheck) playSelectionSort();
    else if(insertcheck) playInsertionSort();
    else if(countingcheck) playCountingSort();
    else if(mergecheck) playMergeSort();
    else if(linearcheck) linearSearch();
    else if(binarycheck) binarySearch();
    disableFirst();

}


// function play(){       // play function on button onclick 
//     bubbleSort(array);
//     showbars();
// }



                        // function for calling bubble sort
function playBubbleSort(){ 
    reset = false;    
    const copy = [...array];
    const moves = bubbleSort(copy);
    animate(moves);
}
                        


                    // function for calling selection sort 
function playSelectionSort(){ 
    reset = false;
    const copy = [...array];
    const moves = selectionSort(copy);
    animate(moves);
}


                      // function for calling insertion  sort 
function playInsertionSort(){
    reset = false;
    const copy = [...array];
    const moves = insertionSort(copy);
    animate(moves);
}

                      // function for calling counting sort 
function playCountingSort(){
    reset = false;
    const animateArray = [...array];
    const copy = [...array];
    for(let i = 0 ; i < animateArray.length ; i++){  // rounding off the elements of array for sorting 
        animateArray[i] = Math.round(animateArray[i]*20);
    }
    
    countingSort(copy,animateArray); // copy for sorting and animateArray for animation

}



function playMergeSort(){
    reset = false;
    const copy = [...array];
    // console.log(copy);
    // mergeSort1(copy);
    // // console.log(copy);
    // animate(merge_moves);
    console.log(copy);
    mergeSort(copy,0,copy.length);
    console.log(copy);
    console.log(merge_moves);
    animate(merge_moves);
}

                        
                    //animation function that calls itself every setted time (recursion)
function animate(moves){
    if(moves.length==0){
        showbars();
        enableFirst();          //to enable buttons after animation is over
        return;
    }
    if(reset){
        console.log("reset is true");
        enableFirst();
        return ;
    }
    const move = moves.shift() ;
    
    const[i,j] = move.indices;
    if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
    }
    
    showbars(move);             //for showing color of swaping bars
    debugger;
    // Animation.pause();
    setTimeout(function(){
        animate(moves);
    },speed);
}


                    
                    // function to show bars each time animate functions call itself
function showbars(move){
    // console.log("showbars is called");
    container.innerHTML="";
    document.getElementById("container").style.flexDirection="unset";
    document.getElementById("container").style.alignItems="flex-end";
    for(let i = 0 ; i < array.length ; i++){
        const bar = document.createElement("div");

                           // conditions for showing colors 
        if(move && move.indices.includes(i)){
            if(move.type=="comp") bar.style.backgroundImage="linear-gradient( #697184,blue)";
            else if(move.type=="select") bar.style.backgroundImage="linear-gradient( #697184,green)";
            else if(move.type=="swap") bar.style.backgroundImage="linear-gradient( #697184,red)";
            else if(move.type=="sorted")bar.style.backgroundImage="linear-gradient( #697184,purple)"; 
        }
        //   condition for merge sort 
        if(move && (move.type=="sorted_merge" || move.type=="comp_merge") && move.range.includes(i)){
            bar.style.backgroundImage="linear-gradient( #697184,yellow)";
        }
        if(move && move.indices.includes(i) && move.type=="sorted_merge"){
            array[i] = move.height;
            bar.style.backgroundImage="linear-gradient( #697184,red)";
        }
        if(move && move.indices.includes(i) && move.type=="comp_merge"){
            bar.style.backgroundImage="linear-gradient( #697184,blue)";
        }
        


                        // creating div by js 
        
        bar.style.height = array[i]*100+"%";
        bar.classList.add("bar");
                      // creating label for div 
        const label = document.createElement("label");
        label.classList.add("label");
        label.innerText = Math.round(array[i]*100);



        // if(move && move.indices.includes(i) && move.type=="sorted"){
        //         bar.style.backgroundColor="purple";
            
        // }
        bar.appendChild(label);
        container.appendChild(bar);
        
    }

}


