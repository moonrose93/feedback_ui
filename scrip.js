const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRaiting ="";


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
    removeActive();   
    selectedRaiting = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
});

});

btnEl.addEventListener("click", () => {
    if(selectedRaiting != ""){
    containerEl.innerHTML = `
    <strong>Thank you!</>`
    } 
})

function removeActive(){
    ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
    });
    
}