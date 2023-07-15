// var n = document.getElementById("size").value;
// var array = [];
// var reset_btn = true;

// sizeOfArray();

// function sizeOfArray(){
//     n = document.getElementById("size").value;
//     console.log(n);
//     reset();
// }

// var speed = 200;
// function speedOfArray(){
//     const temp = document.getElementById("speed").value;
//     speed = 1150 - temp;
// }


// function unsort(){
//     reset_btn = true;
//     var copy = [];
//     for(let i = 0 ; i < n ; i++){
//         copy[i] = Math.random();
//     } 
//     array = [...copy];
//     showbars();
// }

function linearSearch(){
    reset = false;
    const copy = [...array];
    const key = document.getElementById("key").value;
    console.log(key);
    const moves = search_linear(copy,key);
    animate_s(moves);
}


function binarySearch(){
    reset = false;
    sort(array,0,array.length);
    showbars_s();
    const copy = [...array];
    const key = document.getElementById("key").value;
    const moves = search_binary(key,copy);
    animate_s(moves);
}

function animate_s(moves){
    const move = moves.shift();
    if(moves.length==0){
        showbars_s(move) ;
        enableFirst();
        return;
    }
    if(reset){
        showbars_s();
        return;
    }
    

    showbars_s(move);
    debugger;
    setTimeout(function(){
        animate_s(moves)
    },speed);
}




function showbars_s(move){
    const container = document.getElementById("container");
    container.innerHTML="";
    document.getElementById("container").style.flexDirection="column";

    const array_div =  document.createElement("div");
    array_div.setAttribute('id','array_div_s');
    container.appendChild(array_div);

    const index_div = document.createElement("div");
    index_div.setAttribute('id','index_div_s');
    container.appendChild(index_div);

    for(let i = 0 ; i < array.length ; i++){
        var array_div_elem = document.createElement("div");
        array_div_elem.style.height=array[i]*100+"%";
        array_div_elem.classList.add("array_div_elem_s");


        var label = document.createElement("div");
        label.innerHTML=Math.round(array[i]*100);
        label.classList.add("label_s");
        array_div_elem.appendChild(label);


        if(move && move.indices.includes(i)){
            if(move.type=="comp") array_div_elem.style.backgroundImage="linear-gradient( #697184,blue)";
            else if(move.type=="find") array_div_elem.style.backgroundImage="linear-gradient( #697184,red)";
        }
        if(move && move.indices.includes(i) && move.type=="range"){
            array_div_elem.style.backgroundImage="linear-gradient( #697184,yellow)";
        }
        array_div.appendChild(array_div_elem);
    }

    for(let i = 0 ; i < array.length ; i++){

        var index_div_elem = document.createElement("div");
        index_div_elem.style.height = "25px";
        index_div_elem.style.width = "25px";
        index_div_elem.innerHTML=i;
        index_div_elem.classList.add("index_div_elem_s");
        if(move && move.indices.includes(i) && move.type=="find") index_div_elem.style.color="red";

        index_div.appendChild(index_div_elem);


    }
}