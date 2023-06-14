// let name1 = "Камила";
// alert(`Привет, ${name1}`);

// let element = document.getElementById('el1');
// console.log(element);
// // добавили класс
// element.classList.add('active');
// // удалили класс
// element.classList.remove('active');

// let count = 0;
// function chanchedColor() {
//     // получаем массив
//     let box = document.getElementsByClassName('box');
//     // получаем первый элемент
//     let element = box[0];
//     if (count % 2 == 0) {
//         element.classList.add('activeBox');
//     }
//     else {
//         element.classList.remove('activeBox');
//     }
//     count++;
//     // либо одной строчкой
//     // element.classList.toggle('activeBox');
// }

// let btn = document.getElementById('btn');
// //console.log(btn);
// btn.addEventListener('click', chanchedColor);

// // вторая кнопка

// function chanchedText() {
//     let box = document.getElementsByClassName('box');
//     let element = box[0];
//     element.textContent = "Всем привет!";
// }

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', chanchedText);



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