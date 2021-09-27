
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let out1 = document.querySelector('.out-1');
let d1 = document.querySelector('.div-1');
function t1() {
    out1.textContent = d1.textContent;
}

d1.onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let d2 = document.querySelector('.div-2');
let out2 = document.querySelector('.out-2');
function t2(e) {
    out2.textContent = e.altKey;
    // return e;
}
d2.onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let d3 = document.querySelector('.div-3');
let out3 = document.querySelector('.out-3');
function t3() {
    d3.style.width = w3 + 'px'
    out3.textContent = d3.style.width;
    w3 += 5;
}
d3.onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let d4 = document.querySelector('.div-4');
let out4 = document.querySelector('.out-4');
function t4() {
    out4.textContent = d4.textContent;
}
d4.ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let d5 = document.querySelector('.div-5');
function t5() {
    if (d5.classList.contains('active')) {
        d5.classList.remove('active');
    } else d5.classList.add('active');
}
d5.ondblclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
let d6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');
function t6() {
    if (ul6.classList.contains('hide')) {
        ul6.classList.remove('hide');
    } else
        ul6.classList.add('hide');
}
d6.ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let d7 = document.querySelector('.div-7');
let count = 0;
function t7() {
    d7.classList.toggle('active');
}
d7.oncontextmenu = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let ch8 = document.querySelector('.ch-8');
function t8() {
    document.oncontextmenu = () => false;
}
ch8.onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let d9 = document.querySelector('.div-9 img')
function t9() {
    d9.setAttribute('src', 'img/2.png');
}
d9.oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
let d10 = document.querySelector('.div-10 img');
function t10() {
    console.log(d10);
    d10.setAttribute('src', 'img/2.png');
}
d10.onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let d11 = document.querySelector('.div-11 img');
function t11() {
    d11.setAttribute('src', 'img/2.png');
    d11.onmouseleave = () => {
        d11.setAttribute('src', 'img/1.png');
    }
}
d11.onmouseenter = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
let d12 = document.querySelector('.div-12');
d12.onmousedown = () => {
    d12.classList.add('active');
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let d13 = document.querySelector('.div-13');
d13.onmousedown = () => {
    d13.classList.add('active');
    d13.onmouseup = () => {
        d13.classList.remove('active');
    }
}

// () =>  {

// }
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
let d14 = document.querySelector('.div-14');
function t14() {
    d14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;
// document.querySelector('t-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let d15 = document.querySelector('.div-15');
let c = 1;
function t15() {
    c++;
    d15.textContent = c;


}
d15.onmousemove = t15;
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let d16 = document.querySelector('.div-16');
function t16() {
    d16.style.width = w3 + 'px';
    w3++;
}
d16.onmousemove = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    d16.onmousemove = t16;
}
document.querySelector('.b-17_on').onclick = t17On;

function t17Off() {
    d16.onmousemove = () => {
        return false;
    }
}
document.querySelector('.b-17_off').onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let d18 = document.querySelector('.div-18');
function t18() {
    d18.textContent = d18.offsetWidth;
}
d18.onmouseenter = t18;
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let d19 = document.querySelector('.div-19');
function t19() {
    d19.textContent = d19.classList;
}
d19.onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let pr = document.querySelector('progress');
let val = 10;
function t20() {
    pr.setAttribute('value', val);
    val++;
}
pr.onmousemove = t20;
// ваше событие здесь!!!