document.querySelector('a').addEventListener('click',
function (event)
 {const newText = prompt('Введите текст');
 this.textContent = newText
 event.preventDefault()
 });

