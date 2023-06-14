// Функция для 3 задача
function chanchedColor() {
    // получаем массив
    let p = document.getElementsByClassName('p');
    // получаем первый элемент
    let element = p[0];
    element.classList.toggle('activeBox');
}
// Функция для 3 задача
function chanchedText() {
    let p = document.getElementsByClassName('p');
    let element = p[0];
    element.textContent = "Я сменил цвет";
}
// Функция для 4 задачи
function chanchedColor1() {
    let qwerty = document.getElementsByClassName('qwerty');
    for (let i = 0; i < qwerty.length; i++) {
        qwerty[i].classList.toggle('activeBox1');
    }
}

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', chanchedColor);

let btn3 = document.getElementById('btn3');
btn2.addEventListener('click', chanchedText);

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', chanchedColor1);
