const inputElement = document.querySelector('.new-taks-input')
const addTaksButton = document.querySelector('.taks-button')
const taskContainer = document.querySelector('.tasks-container')

function validarBotao(){
   const texto = document.createElement('p')
   taskContainer.appendChild(texto)
   texto.innerText = inputElement.value
}

addTaksButton.addEventListener('click', validarBotao)
