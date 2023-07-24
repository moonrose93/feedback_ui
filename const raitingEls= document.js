const raitingEls= document.querySelectorAll(".raiting");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");


let selectedRaiting ="";


raitingEls.forEach((raitingEls) =>{
    raitingEls.addEventListener("click", (event) => {
    removeActive();
    selectedRaiting = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", () => {
 if(selectedRaiting !== ""){
 containerEl.innerHTML = `
 <strong>Thank You!</strong>
 <br>
 <br>
 <strong>Feedback: ${selectedRaiting}</strong>
 <p>We will use your feedback to improve our customer support.</p>
 `
 
 }
} );


function removeActive(){
    raitingEls.forEach((raitingEls) =>{
        raitingEls.classList.remove("active");
    })
};