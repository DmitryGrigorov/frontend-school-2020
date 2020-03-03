let sliderContent = document.querySelector(".slider-content");

    let images = document.querySelectorAll(".slider-content > img");
    let radioContent = document.querySelector(".slider .radio-buttons");
    let current = 0;

    images.forEach(function (elem, index) {

        let label = document.createElement("label");
        let input = document.createElement("input");
        let span = document.createElement("span");

        // повесить событие на checkbox - изменить картинку при нажатии
        input.addEventListener('click', function () {
            // при нажатии отбразить индекс
            setCurrentImage(index);
        }, false);
        input.setAttribute("type", "radio");
        input.setAttribute("name", "radio-buttons");
        // присоединить input к label tag
        label.appendChild(input);
        // присоединить span к label
        label.appendChild(span);
        // добавляем к кнопке radioContent и вкладываем в input и в label
        radioContent.appendChild(label);
    });
    // Поиск все созданых инпутов
    let inputs = document.querySelectorAll(".radio-buttons input");
    // взять текущий инпут и отметить его так как по умолчанию он false
    inputs[current].checked = true;
    
    // Сначала ищется локальная переменная, а потом глобальная
    function setCurrentImage(index) {
        current = index;
        images.forEach(e => e.style.display = 'none');
        inputs.forEach(e => e.checked = false);
        images[current].style.display = "block";
        inputs[current].checked = true;
    }

    // ЛКМ
    sliderContent.addEventListener('click', function (e) {
        if (e.target.localName === 'img') {
            current = current === 0 ? images.length - 1 : current - 1;
            setCurrentImage(current);
        }
    }, false);

    // ПКМ
    sliderContent.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        if (e.target.localName === 'img') {
            // если текущее равно последнему элементу тогда перейти в начало
            current = current === images.length - 1 ? 0 : current + 1;
            setCurrentImage(current);
        }
    }, false);

    // Колесико
    sliderContent.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            current = current === 0 ? images.length - 1 : current - 1;
            setCurrentImage(current);
        } else {
            current = current === images.length - 1 ? 0 : current + 1;
            setCurrentImage(current);
        }
    }, false);

    // Кнопки на изображении
    sliderContent.addEventListener('click', function (e) {
        if (e.target.className === 'prev-image') {
            current = current === 0 ? images.length - 1 : current - 1;
            setCurrentImage(current);
        }
    }, false);
    sliderContent.addEventListener('click', function (e) {
        if (e.target.className === 'next-image') {
            current = current === images.length - 1 ? 0 : current + 1;
            setCurrentImage(current);
        }
    }, false);

    // в стилях все изображения по умолчанию не видно кроме текущего
    // images[current].style.display = "block";
    setCurrentImage(current);