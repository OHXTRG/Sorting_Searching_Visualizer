
// function showList(){
//     var dopdown = document.getElementById("dropdown_list").classList.toggle("show");
// }

// window.onclick = function(event){
//     var dropdown = document.getElementById("dropdown_list").classList.remove("show");
// }



var bubblecheck = document.getElementById("bubble").checked;
var selectcheck = document.getElementById("select").checked;
var insertcheck = document.getElementById("insert").checked;
var countingcheck = document.getElementById("counting").checked;
var mergecheck = document.getElementById("merge").checked;
var linearcheck = document.getElementById("linear").checked;
var binarycheck = document.getElementById("binary").checked;





//adding eventhandller to button by their ids
// document.getElementById("bubble").addEventListener("click",disableFirst);
// document.getElementById("selection").addEventListener("click",disableFirst);
// document.getElementById("insertion").addEventListener("click",disableFirst);
// document.getElementById("counting").addEventListener("click",disableFirst);
// document.getElementById("merge").addEventListener("click",disableFirst);



                                //button enable and disable functions 
function disableFirst(){
    // document.getElementById("bubble").disabled = true;
    // document.getElementById("selection").disabled=true; 
    // document.getElementById("unsort").disabled= true;
    document.getElementById("size").disabled=true;
    document.getElementById("visualize").disabled=true;
    // document.getElementById("insertion").disabled=true;
    // document.getElementById("counting").disabled=true;
    // document.getElementById("merge").disabled=true;
}
function enableFirst(){
    // document.getElementById("bubble").disabled=false;
    // document.getElementById("selection").disabled=false;
    // document.getElementById("unsort").disabled=false;
    document.getElementById("size").disabled=false;
    document.getElementById("visualize").disabled=false;
    // document.getElementById("insertion").disabled=false;
    // document.getElementById("counting").disabled=false;
    // document.getElementById("merge").disabled=false;
    console.log("button are enabled");
}



