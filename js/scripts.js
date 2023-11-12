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