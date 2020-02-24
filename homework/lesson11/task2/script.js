let list = document.querySelector('#list');

function addClose(item) {
    let closeElem = document.createElement('div');
    closeElem.className = 'close';
    closeElem.textContent = 'x';
    item.appendChild(closeElem);
    closeElem.addEventListener('click', function () {
        closeElem.parentElement.remove();
    })
}

Array.from(list.children).forEach(item => {
    addClose(item);
});


list.addEventListener('click', function (e) {
    e.target.classList.toggle('selected');
});

function addELem() {
    if (inputValid()) {
        let addElem = document.createElement('li');
        addElem.innerHTML = inputText.value;
        addClose(addElem);
        list.appendChild(addElem);
        inputText.value = '';
    }
}

let inputText = document.querySelector('#input-text');
let addButton = document.querySelector('#button-add');
addButton.addEventListener('click', addELem);
inputText.addEventListener('keydown', function (e) {
    if (e.which === 13) {
        addELem();
    }
});

function inputValid() {
    if (inputText.value === '') {
        alert('Заполните поле');
        return false
    }
    return true;
}
