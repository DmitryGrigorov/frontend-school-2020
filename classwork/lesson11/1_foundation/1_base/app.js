const textarea = document.getElementById('textarea');
const button = document.getElementById('button');
const cleanButton = document.getElementById('clear');


function mousedown(evt) {
  if(evt.which === 3) {
    textarea.textContent += `--------------\n`;
  }
  textarea.textContent += `mousedown which ${evt.which} \n`;
}

function mouseup(evt) {
  textarea.textContent += `mouseup which ${evt.which} \n`;
}

function click(evt) {
  textarea.textContent += `click which ${evt.which} \n`;

  // скролим в конец элемента
  textarea.scrollTo({
    top: textarea.scrollHeight
  })
}

function contextmenu(evt) {
  textarea.textContent += `contextmenu which ${evt.which} \n`;

  // скролим в конец элемента
  textarea.scrollTo({
    top: textarea.scrollHeight
  })

  evt.preventDefault();
}

function clean() {
  textarea.textContent = '';
}

button.addEventListener('mousedown', mousedown);

button.addEventListener('mouseup', mouseup);

button.addEventListener('click', click);

button.addEventListener('contextmenu', contextmenu);

cleanButton.addEventListener('click', clean);