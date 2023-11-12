// Função para abrir a barra de navegação lateral
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Função para fechar a barra de navegação lateral
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// MEUS CODIGOS

const submitButton = document.querySelector(".submitFormButton");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
})

// Modal

const saibaMaisHatch = document.querySelector(".more-button.hatch");
const itemAbrir = document.querySelector(".category-container.hatch")
const fechar = document.querySelector(".close-modal")




saibaMaisHatch.addEventListener("click", (e) => {
    e.preventDefault();
    itemAbrir.classList.remove("hidden");

})

fechar.addEventListener("click", (e) => {
    e.preventDefault();
    itemAbrir.classList.add("hidden");

})

const saibaMaisSedan = document.querySelector(".more-button.sedan");
const itemAbrir2 = document.querySelector(".category-container.sedan")
const fechar2 = document.querySelector(".close-modal2")

saibaMaisSedan.addEventListener("click", (e) => {
    e.preventDefault();
    itemAbrir2.classList.remove("hidden");

})

fechar2.addEventListener("click", (e) => {
    e.preventDefault();
    itemAbrir2.classList.add("hidden");

})