// let box = document.querySelector("div"),
// input= document.querySelector("input");

// input.addEventListener("input",() =>{    
//     box.style.background=input.value;
// })

const input =document.querySelector("input");
input.oninput=()=>{
    document.body.style.backgroundColor=input.value;
}