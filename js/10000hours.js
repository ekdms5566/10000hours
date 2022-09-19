// js file

const openButton = document.querySelector(".btn-go");
const modal = document.querySelector("#modal");

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

openButton.addEventListener('click',openModal);
