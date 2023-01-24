

const buttonTrailer = document.querySelector(".buttontrailer");
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function switchModal() {

    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    // Abrir a modal na tela
    switchModal();
    video.setAttribute("src", linkVideo)
    console.log("entrei");
})


closeModal.addEventListener("click", () => {

    switchModal(); // fechar a modal removendo a classe open.
    video.setAttribute("src", "");

});








