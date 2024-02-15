// document.getElementById("count-el").innerText=5;

let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");

let count= 0;

function increment(){
    // count=count+1;
    count +=1;
    countEl.innerText=count;
    // console.log(count);
    // console.log("button is clicked")
}

function save(){
    let entries= count + " - ";
    //using textContent instead of innerText 
    // saveEl.innerText +=entries;
    saveEl.textContent +=entries;
    countEl.textContent=0;
    count=0;
    // console.log(entries)
}