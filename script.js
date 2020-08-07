const botao = document.querySelector('#inscrever')
const modal = document.querySelector('.modal-overlay')
botao.addEventListener("click", function(){
    modal.classList.add('active')
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modal.classList.remove('active')
})