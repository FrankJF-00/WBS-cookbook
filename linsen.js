const portions = document.getElementById("portions")
const incredients = document.getElementsByClassName("incredients")
let currentPortions = portions.value 
console.log(incredients)


portions.addEventListener("change", ()=>{
    
    for (let x of incredients){
        let text = x.innerText
        text = text / currentPortions * portions.value 
    } 
})

