/*
    5)
    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    function getBackgroundColor(theme) {
        if (theme === 'light') {
            return '#FFF';
        } else {
            return '#000';
        }(theme === 'light') ? : ;
    }
*/

const getBackgroundColor = (theme) => (theme === 'light') ? '#FFF' : '#000';