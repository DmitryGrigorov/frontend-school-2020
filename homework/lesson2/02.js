document.write('Префиксный вариант. Сначала инкреминирует, потом проверяет условие.')
let x = 0;
while (++x < 5) document.write(`<div>${x}</div>`);

document.write('Постфиксный вариант. Сначала проверяет условие, а потом инкреминирует.')
let y = 0;
while (y++ < 5) document.write(`<div>${y}</div>`);
