function next(){
    let item = document.querySelectorAll(".item");
    console.log(item);
    let items = document.querySelector(".item");
    console.log(items);
    document.querySelector('.slide').appendChild(item[0])
}


function previous(){
    let items = document.querySelectorAll(".item");
    let item = document.querySelector(".item");
    document.querySelector('.slide').prepend(items[items.length - 1]);
    // let i = 1;
    // let tim;i
    // tim = setInterval(()=>{
    //         items = document.querySelectorAll(".item");
    //         document.querySelector('.slide').prepend(items[items.length - 1]);
    //         i++;
    //         console.log(i);
    //         if(i == 6){
    //             clearInterval(tim);
    //         }
    //     },3000);
}