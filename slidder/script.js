// function next(){

//     let ch = true;
//     while(ch){
//         setInterval(()=>{
//             let items = document.querySelectorAll(".items");
//             let item = document.querySelector(".items");
//             document.querySelector(".slide").prepend(items[items.length - 1]);
//         }, 2000); 
//     }
// } 


let t;
$(document).ready(function(){
    console.log("Hello");
    t = setInterval(()=>{
        let items = document.querySelectorAll(".items");
        let item = document.querySelector(".items");
        document.querySelector(".slide").prepend(items[items.length - 1]);
    },2000);

});

function stop(){
    clearInterval(t);
}
