var nameInput = document.querySelector('#nome')
var emailInput = document.querySelector('#email')
var passwordInput = document.querySelector('#senha')
var enviar = document.querySelector("#enviar")
var form = document.getElementById("form")

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //verificar o campo vazio
    if(nameInput.value === "" || emailInput.value == "" || passwordInput.value == "") {
        alert("Por Favor, Preencha os Campos Vazios!!!")
        return;
    } else {
        alert("Usuario Valido! Carregando Plataforma...")
    }
})
