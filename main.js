// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

let form = document.getElementById('first_form');
let users = [];
form.onsubmit = function (e){
    e.preventDefault();
    let username = e.target.username.value;
    let surname = e.target.surname.value;
    let age = e.target.age.value;
    let div = document.createElement('div');
    let name = document.createElement('h3');
    name.innerText = `${username} ${surname}`;
    div.appendChild(name);
    let ageWrap = document.createElement('span');
    ageWrap.innerText = age;
    div.appendChild(ageWrap);
    document.body.appendChild(div);
    e.target.username.value = '';
    e.target.surname.value = '';
    e.target.age.value = '';
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================


window.onload = function (){
    let counterStorage = localStorage.getItem('counter');
    let counter = JSON.parse(counterStorage) || 0;
    let counterDiv = document.getElementById('block_with_counter');
    counter = ++counter;
    localStorage.setItem('counter', JSON.stringify(counter));
    counterDiv.innerText = counter + '';


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let dateOfVisit = {
        date: date,
        day: day,
        month: month,
        year: year,
        hours: hours,
        minutes: minutes
    }
    let datesStorage = localStorage.getItem('curDate');
    let dates = JSON.parse(datesStorage) || [];
    dates.push(dateOfVisit);
    localStorage.setItem('curDate', JSON.stringify(dates));
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let clearButton = document.getElementById('clear_button');
let text = document.getElementById('text');
clearButton.onclick = function (){
    text.innerText = '';
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageForm = document.getElementById('age_form');
ageForm.onsubmit = function (e){
    e.preventDefault();
    let age = +ageForm.age2.value;
    if((age !== 0) && age < 18) {
        alert('Вам менше 18 років!');
    } else if (age === 0) {
        alert('Введіть корректне значення!');
    } else {
        alert('Все окей!');
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається