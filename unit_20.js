
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */
let out1 = document.querySelector('.out-1');
function t1(event) {
    console.log(event);
    let a = event.key
    out1.textContent = a;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */
let out2 = document.querySelector('.out-2');
function t2(event) {
    console.log(event);
    out2.textContent = event.keyCode;

}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */

let out3 = document.querySelector('.out-3');//97-122 65-90/small big/
function t3(event) {
    let a = event.keyCode;
    if ((a > 64 && a < 91) || (a > 96 && a < 123)) {
        out3.textContent = true;
    } else if (a > 47 && a < 58) {
        out3.textContent = false;
    }
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */
let out4 = document.querySelector('.out-4');
function t4(event) {
    console.log(event.keyCode);
    let a = event.keyCode;
    if (a > 96 && a < 123) {
        out4.textContent += event.key;
    }
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let out5 = document.querySelector('.out-5');
function t5(event) {
    console.log(event);
    out5.textContent += event.key.toUpperCase();

}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let str6 = '';
function t6(event) {
    let a = event.keyCode;
    if (a > 96 && a < 123) {
        str6 += event.key;
        i6.value = str6;
    }
    return false;
}
let i6 = document.querySelector('.i-6');
i6.onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
let out7 = document.querySelector('.out-7');
const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
function t7() {
    let rand = a7[Math.floor(Math.random() * a7.length)];
    out7.textContent = rand;
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let out8 = document.querySelector('.out-8');
const a8 = {
    i: 1,
    o: 0,
    l: 7
}

function t8(event) {
    let a = event.key;
    if (a8[a] != undefined) out8.textContent += a8[a];
    else out8.textContent += a;
    // 1. Получаем из event введенный символ
    // 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
    // 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
}

document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */
let out9 = document.querySelector('.out-9');
let count9 = 0;
function t9(event) {
    console.log(event);
    if (event.key == 'ArrowDown') {
        count9++;
        out9.textContent = count9;
    }
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
let div10 = document.querySelector('.div-10');
function t10(event) {
    let a = event.key;
    if ((a == 'ArrowDown') || (a == 'ArrowUp')) {
        h++;
        div10.style.height = h + 'px';

    } else if ((a == 'ArrowLeft') || (a == 'ArrowRight')) {
        w++;
        div10.style.width = w + 'px';

    }
    // увеличиваем  h, w, потом присваиваем как свойства...

}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
let divK = document.querySelectorAll('.keyboard');//97-122
function t11(event) {
    console.log(event)
    console.log(event.keyCode);//65-90
    let b = event.key.toLowerCase();
    let a = event.code.toLowerCase();
    for (let i = 0; i < divK.length; i++) {
        if (divK[i].classList.contains('keyboard') == true) {
            divK[i].classList.remove('active');
        }
    }
    for (let i = 0; i < divK.length; i++) {
        if (b == divK[i].getAttribute('data') || a == divK[i].getAttribute('data')) {
            divK[i].classList.add('active');
        }
    }

}

document.querySelector('.i-11').onkeydown = t11;

