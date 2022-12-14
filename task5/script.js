const field = document.querySelector('input');
const textBlock = document.querySelector('#duplicateField');
const button = document.querySelector('button')
field.addEventListener('keypress', 
function(event) {
textBlock.textContent = event.currentTarget.value
})
button.addEventListener('click', 
function(event) {
    console.log(textBlock.textContent)
    textBlock.textContent = '';
    field.value = '';
    event.preventDefault
 })