// Управление атрибутами
// Вызов специальных вызовов (hasAttribute, setAttribute, removeAttribute и getAttribute)
// 1. Проверка наличия атрибута
// Задача: при клике на кнопку проверьте, имеет ли изображение атрибут alt, и выводите результат проверки в консоль.
let buttonCheckAlt = document.querySelector('.check-alt');
buttonCheckAlt.addEventListener('click', CheckAltImage);
function CheckAltImage() {
    let imageWinter = document.querySelector('.image-winter');
    if (imageWinter.hasAttribute('alt') == true) {
        console.log('у картинки есть атрибут alt')
    } else {
        console.log('у картинки нет атрибуту alt')
    }
}

// 2. Добавление атрибута
// Задача: если у изображения нет атрибута alt, добавьте его с помощью JavaScript, установив значение "Описание изображения".
let addAlt = document.querySelector('.add-alt');
addAlt.addEventListener('click', addAltToImage);
function addAltToImage() {
    let bird = document.querySelector('.bird');
    if (bird.hasAttribute('alt') === false) {
        bird.setAttribute('alt', 'описание изображения')
    }
    console.log(bird)
}

// 3. Удаление атрибута
// Задача: Добавьте кнопку, которая при нажатии будет удалять атрибут style у заданного элемента, если он существует.
let deleteStyle = document.querySelector('.delete-style');
deleteStyle.addEventListener('click', deleteAtrStyle);
function deleteAtrStyle() {
    let red = document.querySelector('.red');
    if (red.hasAttribute('style') === true) {
        red.removeAttribute('style');
    }
}
// 4. Получение значения атрибута
// Задача: при нажатии на элемент списка (<li>), выводите в консоль значение его атрибута data-value.
let day = document.querySelectorAll('.day');
// console.log (day);
for (let i = 0; i < day.length; i++) {
    day[i].addEventListener('click', consoleDataValue);
    function consoleDataValue() {
        console.log(day[i].getAttribute('data-value'))
    }
}


// 5. Изменение атрибута
// Задача: Реализуйте функционал, который изменяет значение атрибута href у всех ссылок на странице на #.
let link = document.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {
    link[i].setAttribute('href', '#')
}
// 6. Установка нескольких атрибутов
// Задача: установите одновременно атрибуты width и height для изображения, используя метод setAttribute.
let cloud = document.querySelector('.cloud');
cloud.setAttribute('width', '100px');
cloud.setAttribute('height', '100px');
// 7. Сброс всех атрибутов элемента
// Задача: при нажатии на кнопку удаляйте все атрибуты у заданного элемента.

let subtitle = document.querySelector('h4');// работает с классом
let allAtrib = subtitle.attributes;
let need = Object.values(allAtrib);
for (let i = 0; i < need.length; i++) {
    subtitle.removeAttribute(need[i].localName)
}

// 8. Изменение атрибута в зависимости от условия
// Задача: если текстовое поле пустое, установите его атрибут placeholder в значение "Введите текст", иначе уберите данный атрибут.
let input = document.querySelector('.input');
if (input.value == '') {
    input.setAttribute('placeholder', "Введите текст")
}
// 9. Автоматическое обновление изображения
// Задача: Реализуйте кнопку для обновления изображения, изменяя его атрибут src на новый URL-адрес.
let buttonChangeCat = document.querySelector('.change-img');
buttonChangeCat.addEventListener('click', changeCat);
function changeCat() {
    let cat = document.querySelector('.cat');
    cat.setAttribute('src', './img/cat2.jpg')
}
// 10. Копирование атрибута между элементами
// Задача: при нажатии на кнопку скопируйте значение атрибута data-info из одного элемента в другой.
let toGreen = document.querySelector('.text-to-green');
toGreen.addEventListener('click', TextToGreen);
function TextToGreen() {
    let needStyleElem = document.querySelector('.green-text');
    let needStyle = needStyleElem.getAttribute('style');
    let blackText = document.querySelector('.black-text');
    blackText.setAttribute('style', needStyle)
}
// 11. Всплывающая подсказка через атрибут title
// Задача: Добавьте всем кнопкам на странице всплывающую подсказку (атрибут title), отображающую их функционал.
let buttons = document.querySelectorAll('button');
// console.log (buttons);
buttons[0].setAttribute('title', 'проверка атрибута alt');
buttons[1].setAttribute('title', 'добавление атрибута alt');
buttons[2].setAttribute('title', 'удаление атрибута style');
buttons[3].setAttribute('title', 'изменение картинки');
buttons[4].setAttribute('title', 'копирование атрибута style  на другой элемент');

