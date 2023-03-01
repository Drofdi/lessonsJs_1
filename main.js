"use strict";

/*--------------------------------
***********С помощью функции prompt спросите у
пользователя сторону квадрата.
    Выведите на экран площадь введенного квадрата

let sideOfSquare = prompt('Введите сторону квадрата');
let sOfSquare = sideOfSquare ** 2;
alert('Площадь квадрата со стороной ' +
sideOfSquare + ', равна: ' + sOfSquare);*/


/*-------------------------------
В переменной day лежит какое-то число из
интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 43;
if (day >= 1 && day <= 10) {
    alert('1')
} else if (day >= 11 && day <= 20) {
    alert('2')
} else if (day >= 21 && day <= 31) {
    alert ('3')
} else {
    alert('enter the correct day of month please')
}
*/

/*--------------------------
Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99,
    то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9,
    то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите
сообщение о том, что сумма цифр двухзначна.

let num  = String(91);

if (Number(num) >= 10 && Number(num) <= 99){
   if (Number(num[0]) + Number(num[1]) <= 9) {
       alert('sum has a 1 sign' + ' : ' + (Number(num[0]) + Number(num[1]) ));
   } else if (Number(num[0]) + Number(num[1]) > 9) {
       alert('sum has a 2 sighs' + ' : ' +(Number(num[0]) + Number(num[1]) ))
   }
}  else {
    alert('not from 10 to 99');
}
*/

/*----------------------------------------------
let lang = ('fr');
switch (lang) {
    case 'ru':
        console.log('рус');
        break;
    case 'en':
        console.log('англ');
        break;
    case 'de':
        console.log('нем');
        break;
    default:
        console.log('язык не поддерживается');
        break;
}*/

/*------------------------------------------------тернарный оператор мопиратор
let num = -3;
let res = num >= 0 ? '1' : '2';
console.log(res);*/

/*-----------------------------------------------------------------------
Проверка на сравнение может использоваться где угодно, если значения равны, вернет true, если нет то false
let a = 2 * (3 - 1);
let b = 6-2;
let result = (a == b);
console.log(result);

выведет true т.к. а больше чем b
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);

выведет false, так как а равно б
let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);*/

/*----------------------------------------------------------------------------------
Спросите у пользователя, есть ли ему уже 18 лет. Если есть -
выведите на экран алерт с текстом для взрослых,
    а если нет, выведите сообщение о том, что доступ пользователю запрещен.

let age = confirm('Есть 18?');
(age) ? alert('vapeShop!') : alert('No 18, grow up and comeback');

Функция confirm вызывает окошко с вопросом, на который нужно ответить пользователю,
    и двумя кнопками для ответа: с кнопкой 'ОК' и с кнопкой 'Отмена'. Если пользователь нажмет
'ОК' - то функция вернет true, а если 'Отмена' - то вернет false.*/

/*let arr = [6,7,2,2];

if (arr.length == 3) {
    console.log(arr[0] + arr[1] + arr[2]);
}*/


/*-----------------------------------------------
Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let num = 1982020;
let numToStr = String(num);
let lastCh = numToStr[numToStr.length - 1]
if (lastCh == 0) {
    console.log('+++')
} else {
    console.log('---')
}*/

/*----------------------------------------------------------------------------
Пусть в переменной num хранится число. Определите, четное число или нет.
let num = 298132;
let numToStr = String(num);
let lastChOfStr = numToStr[numToStr.length - 1];
if (lastChOfStr == 2 || lastChOfStr == 4 || lastChOfStr == 6 || lastChOfStr == 8 || lastChOfStr == 0) {
    console.log('Число четное');
} else {
    console.log('Число Нечетное')
}*/

/*------------------------------------------------------------------------
В переменной month лежит какое-то число из интервала от 1 до 12.
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 10;
if (month >= 1 && month <= 2 || month == 12){
    console.log('winter')
} else if (month >= 3 && month <= 5){
    console.log('spring')
} else if (month >= 6 && month <=8) {
    console.log('summer')
} else if (month >= 9 && month <= 11){
    console.log('autumn')
} else {
    console.log('pls, enter correct number of month')
}*/

/*---------------------------------------------------------------
Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра
1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.---
let num = 45;
if (String(num)[0] == 1 || String(num)[0] == 2 || String(num)[0] == 3) {
    console.log('yes')
} else {
    console.log('no');
}*/

/*--------------------------------------------------------------------
Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
    Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = 123111;
let numToStr = String(num);
let num1 = Number(numToStr[0]) + Number(numToStr[1]) + Number(numToStr[2]);
let num2 = Number(numToStr[3]) + Number(numToStr[4]) + Number(numToStr[5]);
if (num1 == num2) {
    console.log('yes');
} else {
    console.log('nope');
}
*/

/*let i = 11;
while (i <= 33) {
    console.log(i);
    i++;
}*/

/*let num = 11;
let i = 0;
while (num <= 1000) {
    i ++;
    num *= 3
}
console.log(i)*/

/*-----------------------------------------------------------
Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
}*/

/*Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}*/

/*Выведите в консоль элементы следующего массива в обратном порядке:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}*/

/*--------------------------------------------------------------------------
Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (arr[elem] > 3 && arr[elem] < 10 ) {
        console.log(arr[elem]);
    }
}*/

/*Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let keys in obj) {
    if (obj[keys] % 2 === 0){
        console.log(obj[keys])
    }
}*/

/*------------------------------------------------------------------------------
Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i <= 200; i +=2){
    res += i;
}
console.log(res);*/

/*Найдите сумму нечетных чисел от 1 до 99.
let res = 0;
for (let i = 1; i <= 99; i += 2){
    res += i;
    console.log(res);
}*/

/*Найдите произведение целых чисел от 1 до 20.
let res = 1;
for(let i = 1; i <= 20; i++) {
    res = res * i;
}
console.log(res);*/

/*Найдите сумму элементов элементов, являющихся четными числами.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    if (elem % 2 ===0){
        res = res + elem;
    }
}
console.log(res);*/

/*Найдите сумму квадратов элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    elem = elem ** 2;
    res += elem;
    console.log(res)
}*/

/*Найдите произведение элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let elem of arr){
    res *= elem;
    console.log(res);
}*/


//-----------------------------------------------------------------
/*С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for (let i = 1; i <= 5; i++){
    str += '-';
}
console.log(str);*/

/*С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for (let i = 1; i < 10; i++){
    str += i;
}
console.log(str);*/

/*С помощью цикла сформируйте строку '987654321'.
let str = '';
for (let i = 9; i >= 1; i--){
    str = str + i;
}
console.log(str)*/

/*С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str = '';
for (let i = 1; i < 10; i++){
        str += `-${i}`
    if (str[str.length - 1] == 9){                   <------------------------Мне кажется можно подругому, но я не допер как
        str = str + '-';                                                        добавить последний дефис
    }
}
console.log(str);*/

/*-------------------------------------------------------------------------
Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for (let i = 10; i <= 1000; i++) {
    let numToStr = String(i);
        console.log(numToStr[0]);                   <------------------------ не пойму что в консоли написано, но вроде правильно
}
*/

/*Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
for (let i = 10; i <= 1000; i ++){
    let iToStr = String(i);
    console.log(i); // для проверки
    if (iToStr.length == 2){
        console.log(Number(iToStr[0]) + Number(iToStr[1]));                   <------------------------ сделал так же как просили в задании, но сначала
        } else if (iToStr.length == 3) {                                                                    не понял и чуть чуть усложнил
        console.log(Number(iToStr[0]) + Number(iToStr[1]) + Number(iToStr[2]));
    } else if (iToStr.length == 4) {
        console.log(Number(iToStr[0]) + Number(iToStr[1]) + Number(iToStr[2]) + Number(iToStr[3]));
    }
}*/

/*Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for (let i = 0; i <= 1000; i++){
    let toStr = String(i);
    if (toStr[0] == "1"){
        console.log(toStr);
    }
}*/

/*Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++){
    let toStr = String(i);
    if (Number(toStr[0]) + Number(toStr[1]) == 5){
        console.log(i);
    }
}*/


//---------------------------------------------BREAK

/*Дан массив с числами. Запустите цикл, который будет по очереди
выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
let arr = [1, 2, 3, 4, 5, 2, 0, 1, 1, 2, 1, 4];
for (let elem of arr) {
    console.log(elem);
    if(elem == 0){
        break;
    }
}*/

/*Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr = [1, 2, 3, 4, 5, 2, 0, 1, -1, 2, 1, 4];
let result = 0;
for (let elem of arr){
    if (elem < 0){
        break;
    } else {
    result += elem;
    }}
console.log(result)*/

/*Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let arr = [1, 2, 2, 4, 3, 2, 0, 1, -1, 2, 1, 4];
let i = 0;
for (let elem of arr){
    i ++;
    if (elem == 3) {
        break;
    }
}
console.log(`Position of the first "3" is ${i}`);*/

/*Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let countOfNumbers = 0;
let result = 0;
for (let i = 0; i < 1000; i++){
    result += i;
    countOfNumbers++;                   <------------------------ Не уверен правильно ли решил задачу
    if (result > 100){
        break;
    }
}
console.log(countOfNumbers);*/

//---------------------------------------------------------Вложенные циклы в JavaScript
/*
С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
for (let i = 1; i < 10; i++){
    for (let j = 1; j < 4; j++){
        document.write(i);
    }
}*/


/*С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
for (let i = 1; i < 4; i++){
    for (let j = 1; j < 4; j++){
        document.write(i);
        document.write(`${j} `);
    }
}*/

//-------------------------------метод push
/*
Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for(let i = 1; i <= 10; i++){
    arr.push(i);
}
console.log(arr);
*/

/*Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr = [];
for(let i = 1; i <= 10; i++){
    arr.push('x');
}
console.log(arr);*/

/*Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr = [1, 2, 3, 4, 5, 2, 0, 1, -1, 2, 1, 4];
let newArr = [];
for(let elem of arr){
    if (elem >= 0){
        newArr.push(elem);
    }
}
console.log(newArr);*/

//--------------------------------Изменение массива в цикле JavaScript
//!!!!!!!!!!!!!!!Для изменения массивов нельзя применять for of, нужно использовать обычный for  с счетчиком
// (почему я не оч понял, не понял поч не работает elem = elem ** 2 к примеру, зато работает arr[i] = arr[i] ** 2)


/*Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] ** 2;
}
console.log(arr);*/

/*Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] - 1;}
console.log(arr);*/

/*Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    arr[i] += 10;}
console.log(arr);*/

//-----------------------------------Заполнение объектов через цикл в JavaScript

/*Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
let arr1 = ['пн', 'вт', 'ср', 'чт',
    'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let obj = {};
for (let i = 0; i < arr1.length; i++){
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);*/

//Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
//let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
/*let newObj = {};
for(let elem in obj){
    if(obj[elem] % 2 === 0){
        newObj[elem] = obj[elem]
    }
}
console.log(newObj);*/

/*let objWithHonestNumbers = {};
for (let i = 0; i < Object.keys(obj).length; i++){
    if (Object.values(obj)[i] % 2 == 0){
        let key = Object.keys(obj)[i];             // <------------------------------------------оч сложно, можно ли решить эту задачу без Object.keys/values не понял(понял как решить)
        let value = Object.values(obj)[i];
        objWithHonestNumbers[key] = value;
    }
}
console.log(objWithHonestNumbers);*/

/*Переберите этот объект циклом и создайте новый объект так, чтобы его
ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let reverseObj = {};
for (let i = 0; i < Object.keys(obj).length; i++){
    let key = Object.keys(obj)[i];
    let value = Object.values(obj)[i];
    reverseObj[value] = key;
}
console.log(reverseObj);*/

//----------------------------Изменение объектов через цикл в JavaScript

/*Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    obj[key] **= 2;
}
console.log(obj);*/

/*Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    obj[key]++
}
console.log(obj);*/

//-------------------------------------------Работа с флагами в JavaScript

/*Давайте теперь попробуем сделать так, чтобы, если в массиве вообще нет элементов со значением 3,
    выводилось '---'. Распространенным заблуждением будет добавить else к нашему
ифу - в этом случае '---' будет выводиться на все элементы, не являющиеся 3:
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    if (elem == 3) {
        console.log('+++'); // выведет на элементе 3
    } else {
        console.log('---'); // выведет на элементах 1, 2, 4, 5
    }
}
Итак, идея добавить else - плохая идея, не рабочая. Для решения задач подобного типа
(такие задачи встречаются достаточно часто) и используют так называемые флаги.*/
/*let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента !!!!!!!!!!!!3 нету в массиве */

//Задачи

/*Проверьте, что в этом массиве есть элемент
'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr = ['a', 'b', 'd', 'e'];
let flag = false;
for (let elem of arr){
    if (elem == 'c'){
        flag = true;
        break;
    }
}
if (flag == true){
    console.log('exist');
} else {
    console.log("doesn't exist");
}*/


/*Напишите код, который будет проверять число на то, простое оно или нет.
    Простое число делится только на единицу и на само себя, и не делится на другие числа.
/*let number = 21;
let flag;
for (let i = 2; i < number; i++){
    if (number % i == 0){
        flag = false;
        break
    } else {
        flag = true;
    }
}
if (flag == true){
    console.log('число простое')
} else {
    console.log('не простое')
}*/

//----------------------чтобы в одном цикле одновременно подсчитывалось и
// количество троек, и количество двоек.
/*let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let countOf3 = 0;
let countOf2 = 0;
for (let elem of arr){
    if (elem == 3){
        countOf3++
    } else if (elem == 2){
        countOf2++
    }
}
console.log(`количество троек: ${countOf3}, количество двое : ${countOf2},
Общее количество двое и троек: ${countOf2 + countOf3}`)*/


//------------------------------------Объект с количеством элементов в массиве JavaScript
//Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
/*let arr = ['a', 'b', 'c', 'a', 'a', 'b','dimas'];
let count = {};
for (let elem of arr){
    if (count[elem] === undefined){
        count[elem] = 1;
    } else {
        count[elem]++
    }
}
console.log(count)*/

/*------------------------Получение соседей элементов в массиве JavaScript
Дан массив с числами. Переберите его циклом и в
каждой итерации цикла выведите следующий элемент массива.
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
for (let i =-1; i < arr.length - 1; i++){
    console.log(arr[i + 1]);
}*/

/*Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла
выводилась сумма текущего и следующего элемента массива.
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
for (let i = 0; i < arr.length - 1; i++){
    console.log(arr[i + 1] + arr[i]);
}*/

/*Дан массив с числами. Переберите его циклом и в
каждой итерации цикла выведите два предыдущих элемента массива.
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
for (let i = 2; i < arr.length; i++){
    console.log(arr[i - 2]);
    console.log(arr[i - 1]);
}*/

/*Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась
сумма двух предыдущих элементов и текущего элемента массива.
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
for (let i = 2; i < arr.length; i++){
    console.log(`${arr[i - 2]} + ${arr[i - 1]} + ${arr[i]} = ${arr[i - 2] + arr[i - 1] + arr[i]}`);
}*/

/*Дан массив с числами. Переберите его циклом и в каждой итерации
цикла выведите сумму предыдущего, текущего и следующего элементов массива.
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
for (let i = 1; i < arr.length - 1; i++){
    console.log(`${arr[i - 1]} + ${arr[i]} + ${arr[i + 1]} = ${arr[i - 1] + arr[i] + arr[i + 1]}`);
}*/

/*Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let arr = [10, 20, 30, 40, 21, 32, 51];
let result = 0;
for (let elem of arr){
    let elemToStr = String(elem);
    if (Number(elemToStr[0]) == 2 || Number(elemToStr[0] == 1)){
        result += elem;
    }
}
console.log(result);*/


//---------------------------------------------------------------------
/*    Исправьте ошибки, допущенные в следующем коде:
    let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
    if (elem[0] === '1' && elem[0] === '2') {
        sum += +elem;
    }
}
 РЕШЕНИЕ: (как я понял должна найтись сумма чисел у которых первая цифра 1 или 2

console.log(sum);           <<<-------------------Мне кажется я опять все оч сильно усложнил
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;
for (let i = 0; i < Object.keys(obj).length; i++) {
    if (String(Object.values(obj)[i])[0] == 1 || String(Object.values(obj)[i])[0] == 2){
        sum += Object.values(obj)[i];
    }
}
console.log(sum);*/


//----------------------Практика на циклы !!!!!!!!!!!!!

/*Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++){
    console.log(i);
}*/

/*Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}*/

//Заполните массив 10-ю иксами с помощью цикла.
/*let arr = [];
for (let i = 0; i < 10; i++){
    arr[i] = 'x';
}
console.log(arr);*/

/*Заполните массив числами от 1 до 10 с помощью цикла.
let arr = [];
for (let i = 0; i <= 10; i++){
    arr[i] = i;
}
console.log(arr);*/

/*Дан массив с числами. С помощью цикла выведите
только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [1,5,12,6,-1,1,-12,6,2,0,11,2,5,9];
for (let elem of arr){
    if (elem > 0 && elem < 10){
        console.log(elem)
    }
}*/

/*Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [1,5,12,6,-1,1,-12,6,2,0,11,2,5,9];
let flag = false;
for (let elem of arr){
    if (elem == 5){
        flag = true;
    }
}
console.log(flag);*/

/*Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [1,5,12,6,-1,1,-12,6,2,0,11,2,5,9];
let res = 0;
for (let elem of arr){
    res += elem;
}
console.log(res);*/

/*Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [1,5,2];
let res = 0;
for (let elem of arr){
    res += elem ** 2;
}
console.log(res);*/

/*Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr = [1,5,2,3,4,2,1,7,3];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (i == arr.length - 1){
        sum = sum / arr.length;
    }
}
console.log(sum);*/

/*Напишите скрипт, который будет находить факториал числа.
    Факториал - это произведение всех целых чисел от единицы до заданного числа.
let n = 15;
let factorial = 1;
for (let i = 1; i <= n; i++){
    factorial *= i;
}
console.log(factorial);*/

/*Заполните массив числами от 10 до 1 с помощью цикла.
let arr = [];
let n = 10;
for (let i = 0; i < 10; i++){           ---------------Можно ли сделать проще?
    arr[i] = n;
    n--;
}
console.log(arr);*/

/*Дан массив с числами. Числа могут быть положительными и отрицательными.
    Найдите сумму положительных элементов массива.
let arr = [1,5,12,6,-1,1,-12,6,2,0,11,2,5,9];
let sumOfPosNum = 0;
for (let elem of arr){
    if (elem >= 0){
        sumOfPosNum += elem;
    }
}
console.log(sumOfPosNum);*/

/*Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr){
    if (String(elem)[0] == 1 || String(elem)[0] == 2 ||String(elem)[0] == 5){
        console.log(elem);
    }
}*/

/*Дан массив с числами. Выведите элементы этого массива в обратном порядке.
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
}*/

 /*Дан массив с числами. С помощью цикл
а выведите на экран все элементы, значение которых совпадает с их порядковым
номером в массиве.
let arr = [0,1,2,5,4,6,6,9,8];
for (let i = 0; i < arr.length; i++){
    if (arr[i] == i){
        console.log(arr[i]);
    }
}*/

/*Дан массив с числами. С помощью цикла for и
    функции document.write выведите каждый
элемент массива с новой строки. Используйте для этого тег br.
let arr = [0,1,2,5,4,6,6,9,8];
for (let i = 0; i < arr.length; i++){
    document.write(arr[i] + '<br>');
}*/

/*Дан массив с числами. С помощью цикла-
  -for и функции document.write выведите каждый элемент массива в отдельном абзаце.
let arr = [0,1,2,5,4,6,6,9,8];
for (let elem of arr){
    document.write('<p>'+ elem);
}*/

/*Составьте массив дней недели. С помощью цикла for
    выведите все дни недели, а выходные дни выведите жирным.
let arr = ['mn', 'td', 'wd', 'th', 'fr', 'sn', 'st'];
for (let elem of arr){
    if (elem == 'sn' || elem == 'st'){
        document.write('<b>'+ elem + '</b>' + ' ')
    } else {
        document.write(elem + ' ')
    }
}*/

/*Составьте массив дней недели. С помощью цикла for выведите все дни
недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let arr = ['mn', 'td', 'wd', 'th', 'fr', 'sn', 'st'];
let day = 'wd';
for (let elem of arr){
    if (elem == day){
        document.write('<b>'+ elem + '</b>' + ' ');
    } else {
        document.write(elem + ' ')
    }
}*/

/*Увеличьте зарплату каждого работника на 10%.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj){
    obj[key] = obj[key] * 0.1 + obj[key];
}
console.log(obj)*/

/*Модифицируйте предыдущую задачу так, чтобы зарплата
увеличивалась только тем работникам, у которых она меньше или равна 400.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj){
    if (obj[key] <= 400){
        obj[key] = obj[key] * 0.1 + obj[key];
    }
}
console.log(obj)*/

/*С помощью этих массивов создайте новый объект, сделав его
ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i < arr1.length; i++){
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);*/

/*Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;
for (let key in obj){
    sumKeys += +key;
    sumValues += obj[key];
}
console.log(sumKeys/sumValues);*/

/*Запишите ключи этого объекта в один массив, а значения - в другой.
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arrKeys = [];
let arrValues = [];
for (let i = 0; i < Object.keys(obj).length; i++){
    arrKeys[i] = Object.keys(obj)[i];
    arrValues[i] = Object.values(obj)[i];
}
console.log(arrKeys);
console.log(arrValues);*/

/*Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
То есть у вас в результате получится вот такой массив:
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,                                 <<<<<<<<<<<<<!!!!!-------------------При данном решении в массиве появляется empty
    7: 452,                                                                         (пропуск), почему, не понимаю
};
let arr = [];
for (let i = 0; i < Object.keys(obj).length; i++ ){
    if (String(Object.values(obj)[i])[0] == 1 ||String(Object.values(obj)[i])[0] == 2){
        arr[i] = Object.values(obj)[i];
    }
}
console.log(arr);*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:
{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

let obj = {};
for (let i = 0; i < arr.length; i++){           <----------Сликшом просто, я все правильно сделал?
    obj[i + 1] = arr[i];
}
console.log(obj);*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let obj = {};                                   <----------Сликшом просто, я все правильно сделал?
for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = i + 1;
}
console.log(obj);*/




//!!!!!!!!!!!!!!!Многомерные массивы в JavaScript

/*Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];
document.write(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0]);*/

/*Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [[1, 2], [3, 4], [5, 6]];
document.write(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1])*/

//Обращаясь к каждому элементу массива найдите сумму всех его элементов.
/*let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
console.log(
    arr[0][0][0] + arr[0][0][1] +
    arr[0][1][0] + arr[0][1][1] +
    arr[1][0][0] + arr[1][0][1] +
    arr[1][1][0] + arr[1][1][1]
)*/

/*Вручную, без цикла, найдите сумму элементов этого массива.
let arr = [
    [
        1, 2, 3, [4, 5, [6, 7]]
    ],
    [
        8, [9, 10]
    ]
];
console.log(
    arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] +
    arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] +
    arr[1][0] + arr[1][1][0] + arr[1][1][1]
)*/

/*С помощью вложенных циклов найдите сумму элементов этого массива.
let result = 0;
let arr = [[1, 2, 3], [4, 5], [6]];
for (let subArr of arr){
    for (let elem of subArr){
        result += elem;
    }
}
console.log(result);*/

/*С помощью вложенных циклов найдите сумму элементов этого массива.
let result = 0;
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let subSubArr of arr){
   for(let subArr of subSubArr){
       for (let elem of subArr){
           result += elem;
       }
   }
}
console.log(result);*/

//Решите предыдущие две задачи через цикл for.
/*let result = 0;
let arr = [[1, 2, 3, 4, 5], [6,
    7, 8], [9, 10]];
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        result += arr[i][j];
    }
}
console.log(result);*/

//№2
/*let result = 0;
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let k = 0; k < arr[i][j].length; k++){
            result += arr[i][j][k]
        }
    }
}
console.log(result);*/

/*проверка на простое число
const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(11));*/


//-----------------------------------------------Заполнение многомерных массивов
/*let arr = [];
for (let i = 0; i < 3; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
        arr[i][j] = j;
    }
}
console.log(arr);*/




/*------------------------------------------------------------------------------------------------------------------
--Задания Ромы

Easy

1. Создать функцию, которая принимает массив и умножает все числа на 2*/ //++++++++++++++++++

/*function squareArrow(arr) {
    let newSquareArr = [];
    for (let i = 0; i < arr.length; i++){
        newSquareArr[i] = arr[i] ** 2;
    }
    return newSquareArr;
}
console.log(squareArrow([1,3,6]))*/

//1 forEach
/*let arr = [1,3,6,9];
arr.forEach(function(n){
    n *= 2;
    console.log(n);
});*/

//1 MAP
/*let arr = [1,3,6,9];
let doubleNumbersArr = arr.map(function(n){
   return n *= 2;
});
console.log(doubleNumbersArr);*/



/*
2. Создать функцию, которая принимает массив и возвращает числа четные (кратные 2) +++++++++???
*/

/*function evenNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
console.log(evenNumber([1,2,3,4,5,6]))*/

// 2 filter
/*let arr = [1,2,3,4,5,6,7,8];
function evenNumber(isEven) {
    return isEven % 2 == 0;
}
console.log(arr.filter(evenNumber))*/




// 3. Создать функцию, которая принимает массив и возвращает сумму чисел этого массива

/*function summOfArr(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}
console.log(summOfArr([1,2,3,4,5]));*/

//3 reduce ------------вообще тяжело с reduce

/*let initialValue = 0;
let resultSum = [1,2,3,4,5].reduce(function(a, b){
    return a + b;
},initialValue);
console.log(resultSum);*/



// 4.Создать функцию, которая принимает массив чисел и число и возвращает индекс этого числа или -1, если оно не было найдено

/*function sameNumber(arr,n){
    let flag = -1;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == n){
            flag = `индекс числа ${n} : ${i}`
            break;
        }
    }
    return flag;
}
console.log(sameNumber([1,2,3,4,5],5))*/

//4 -------indexOf for arr

/*function sameNumber(arr,n){
    return arr.indexOf(n);
}
console.log(sameNumber([1,2,3,4],55));*/




// 5. Создать функцию, которая принимает строку и символ ('abbbbababc', 'c') и возвращает позицию символа

/*function sameLetter(str,letter){
    let position;
    for (let i = 0; i < str.length; i++){
        if (str[i] === letter) {
            position = `Position is : ${i + 1}`;
        }
    }
    return position;
}
console.log(sameLetter('abcdefucku','f'))*/




// 6. Создать функцию, которая принимает строку и подстроку ('abbbbababc', 'aba') и возвращает позицию первого символа подстроки

//----------------------------вариант 1, работает только если в подстроке не больше 3х символов
/*function strSubstr(str,substr){
    let positionFirstLet;
    for(let i = 0; i < str.length; i++){
        if(str[i] == substr[0] && str[i + 1] == substr[1] && str[i + 2] == substr[2]){
            positionFirstLet = i;
        }
    }
    return positionFirstLet;
}
console.log(strSubstr('kotop','oto'));*/



/* function subStrInStr(str,subStr){ //+++++++++++++++++++++++++++
    let flag;
    let position;
    cycle1:
        for(let i = 0; i < str.length; i++){
            if(str[i] == subStr[0]){
                let j = 0;
                position = i;
                while(j < subStr.length){
                    if (subStr[j] !== str[i]){
                        flag = false;
                        continue cycle1;
                    }
                    if (str[i] == subStr[j]) {
                        flag = true;
                        i++;
                        j++;
                        if(str[i] == str[i + 1]){
                            i++;
                        }
                        if(j == subStr.length){
                            return position;
                        }
                    }
                }
            } else {
                flag = false;
                position = -1;
            }
        }
    return position;
}
console.log(subStrInStr('abcdefuufuunom', 'fu')) */


//6 INDEX OF
/*function subStrInStr(str, subStr){
    return str.indexOf(subStr);
}
console.log(subStrInStr('abawssss', 'baw'));*/





// ----------------MIDDLE

// 1. Создать функцию, которая принимает массив,
// в котором есть вложенные массивы
// ф-я возвращает выпрямленные массив function flat (arr) {}const arr = [1, 2, 3, [5, 6], 7, 8, [9, 10]] flat(arr) // [1,2,3,5,6,7,8,9,10]


// 1 FLAT METHOD
/*function straightArr(arr){
    return arr.flat()
}
console.log(straightArr([1,2,3,[4,5],6]));*/


//1 чистое решение
//let arr = [1, 2, 3, 4, [5, 6], 7, 8, [9, 10],1, 2, 3, 4, [5, 6], 7, 8, [9, 10]];  //++++++++++++
/*function flatArr(arr){
    let flatArrow = [];
    for (let i = 0, k = 0; i < arr.length; i++){
        if(typeof arr[i] === "object"){
            for(let j = 0; j < arr[i].length; j++, k++) {
                flatArrow[k] = arr[i][j];
            }
        } if (typeof arr[i] !== "object") {
                flatArrow[k] = arr[i]
                k++
            }
        }
    return flatArrow;
}
console.log(flatArr(arr));*/



//----без функции та же что сверху
/*let flatArr = []
for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object"){
        for (let j = 0; j < arr[i].length; j++){
           // flatArr[k] = arr[i][j];
            flatArr.push(arr[i][j])
        }
    }if (typeof arr[i] !== "object"){
       // flatArr[i] = arr[i];
        flatArr.push(arr[i])
    }
}
console.log(flatArr);*/



// 2. Создать функцию, которая принимает объект,в котором есть вложенные объекты ф-я возвращает выпрямленные объект


/*const obj1 = {
    test: {
        name: 'Slavik'
        },
    lastName: 'Panukov',
    test1: {
        name1: 'Slavik1'
    },
    lastName1: 'Panukov1',
}

//усложнил себе задачу и попробовал без for in
function flatObj(obj){                               ++++++++++++++++++++
    let flatObject = {};
    for(let i = 0; i < Object.keys(obj).length; i++){
        if (typeof Object.values(obj)[i] === 'object'){
            for(let j = 0; j < Object.keys(obj)[i][j].length; j ++){
            let key = Object.keys(Object.values(obj)[i]);
            let value = Object.values(Object.values(obj)[i]);
            flatObject[key] = String(value);
            }
        } if (typeof Object.values(obj)[i] !== 'object') {
            let key1 = Object.keys(obj)[i];
            let value1 = Object.values(obj)[i];
            flatObject[key1] = value1;
        }
    }
    return flatObject;
}
console.log(flatObj(obj1));*/



/*const obj1 = {
    test: {
        name: 'Slavik'
    },
    lastName: 'Panukov'
}
function flatObj(obj) {  //+++++++++++
    let flatObject = {};
    for (let elem in obj){
        if (typeof obj[elem] === "object"){
            for(let subElem in obj[elem]){
                flatObject[subElem] = obj[elem][subElem]
            }
        } if (typeof obj[elem] !== "object") {
            flatObject[elem] = obj[elem]
        }
    }
    return flatObject;
}
console.log(flatObj(obj1));*/



// 3. Создать функцию, которая принимает массив, в котором есть вложенные массивы и объекты ф-я возвращает выпрямленные массив
//flat(arr2) // [1,2,3,5,6,7,8,9,10,11,12]


/*const array = [1, 2, 3, 4, [5, 6], 7, 8, [9, 10], { test: 11, test2: 12 }];

function flatAlltoArr(arr) {                //++++++++++++++++
    let flatArr = []
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object" && Array.isArray(arr[i])){
            for (let j = 0; j < arr[i].length; j++){
                flatArr.push(arr[i][j])
            }
        }if (typeof arr[i] !== "object"){
            flatArr.push(arr[i])
        }if (typeof arr[i] === "object"){
            for(let elem in arr[i]){
                flatArr.push(arr[i][elem])
            }
        }
    }
    return flatArr;
}

console.log(flatAlltoArr(array))*/



// 4. Создать ф-ю которая определяет является ли строка анаграммой 'aba' = 'baa', 'aab'


//с помощью методов сортировки строки +++
/*function isAnagram(str1,str2){
    if (str1.length !== str2.length){
        return false;
    }
    let str1Sort = str1.split('').sort().join('');
    let str2Sort = str2.split('').sort().join('');
    let result = (str1Sort === str2Sort)
    return result;
}
console.log(isAnagram('didio','ddiio'))*/




/*function isAnagram(str,str2) {   //++++++++++++
    let flag;
    if (str.length !== str2.length){
        return false;
    }
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < str2.length; j++){
                if (str[i] == str2[j]){
                    flag = true;
                    str2 = str2.replace(str2[j], '')
                    console.log(str2)
                    break;
                } else if (j == str2.length - 1) {
                    return false;
                }
        }
    }
 return flag;
}
console.log(isAnagram('zero','zero'));*/



// 5. Создать ф-ю которая определяет является ли строка палиндромом
// 'anna' => 'anna': true


/*function isPalindrome(str) {    //+++++++++++++++++++++
    let reverseStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr = reverseStr + str[i];
    }
    if (reverseStr === str) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('майонойам'));*/



// 6. функция принимает два массива проверить, является ли первый массив последовательностью во втором
// [1,2,3], [6,10,13,1,6,2,3] function sequence (nums1, nums2) {}

/*function arraySame(arr1,arr2){ //            ++++++++++++++++++++++++++++++++
    let newArr = [];
    let k = 0;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                newArr[k] = arr1[i];
                k++
                arr2.splice(j, 1);
                break;
            }
        }
    }
    if (String(arr1) === String(newArr)){
        return true;
    } else {
        return false;
    }
}
//console.log(arraySame([1,2,3], [6,10,13,1,6,2,3]))

console.log(arraySame([1,2,3], [6,10,10,13,1,6,2,3]))*/



// 7. Есть два сортированных массива чисел. Числа сортированы, но могут повторяться. Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.

//let a1 = [1, 2, 4, 7, 11, 19]
//let b1 = [2, 7, 19, 28, 31]
//function intersection (arr1, arr2) {}
//intersection(a1, b1) // [2,7,19]


/*function intersection (arr1, arr2){ //+++++++++++++
    let newArr = [];
    let k = 0;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                newArr[k] = arr1[i];
                k++;
                arr2.splice(j,1)
            }
        }
    }
    return newArr;
}
console.log(intersection([1, 2, 4,7,7,7, 7, 11, 19],[2, 7, 19, 28, 31]));*/



// HARD

//1.написать функцию определяющую глубину объекта
/* const obj2 = {
    test: {
        name: 'name',
        test2: {
            name: 'name 2',
            test3: {
                name: 'name 3',
                test3: {
                    name: 'name 3',
                    test3: {
                        name: 'name 3'
                    }
                }
            }
        }
    }
}

const obj1 = {
    test: {
        name: 'name',
        test2: {
            name: 'name 2',
            test3: {
                name: 'name 3'
            }
        }
    }
}

let i = 0; //++++++++++++++++++++++++++++++++++++++++++++++++++
function depth(obj){
    for(let keys in obj){
        if(typeof obj[keys] === 'object'){
            i++
            depth(obj[keys])
        }
    }
    return i;
}

console.log(depth(obj2)) */
//depth(obj1) // 3
//depth(obj2) // 5



//--------------------------------продолжение уроков

//Сформируйте с помощью двух вложенных циклов следующий массив:
//[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

/*let arr = [];
for(let i = 0; i < 3; i++){
    arr[i] = [];
    for(let j = 0; j < 5; j++){
        arr[i][j] = j + 1
    }
}
console.log(arr);*/



/*Сформируйте с помощью двух вложенных циклов следующий массив:
    [
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x']
    ]*/

/*let arr = [];
for(let i = 0; i < 3; i++){
    arr[i] = [];
    for (let j = 0; j < 4; j++){
        arr[i][j] = 'x'
    }
}
console.log(arr)*/



/*Сформируйте с помощью трех вложенных циклов следующий массив:
    [
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
    ]*/


/*let arr = [];

for(let i = 0; i < 1; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
        arr[i][j] = [];
        for(let k = 0; k < 5; k++){
            arr[i][j][k] = k + 1;
        }
    }
}
console.log(arr)*/


//Сформируйте с помощью двух вложенных циклов следующий массив:
//[[1, 2], [3, 4], [5, 6], [7, 8]]

/*let arr = [];
for (let i = 0, k = 1; i < 4; i++){
    arr[i] = [];
    for (let j = 0; j < 2; j++){
        arr[i].push(k++)
    }
}
console.log(arr)*/


//Сформируйте с помощью двух вложенных циклов следующий массив:
//[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

/*let arr = [];
let k = 2;
for(let i = 0; i < 4; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
        arr[i].push(k)
        k += 2;
    }
}
console.log(arr);*/


//Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

/*let arr = [];
let m = 1;
for(let i = 0; i < 2; i++){
    arr[i] = [];
    for(let j = 0; j < 2; j++){
        arr[i][j] = [];
        for(let k = 0; k < 2; k++){
            arr[i][j].push(m);
            m++;
        }
    }
}
console.log(arr);*/


//Найдите сумму элементов приведенного объекта.

/*let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let result = 0;
for(let subObj in obj){
    for(let keys in obj[subObj]){
       result += obj[subObj][keys]
    }
}
console.log(result)*/


//Выведите на экран элемент 'b2' и элемент 'c1'.
/*let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}

console.log(obj[2][2]);
console.log(obj[3][1]);*/


//Вручную, без цикла, найдите сумму всех элементов-чисел.
/*let obj = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        }, f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
}
console.log(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f +
obj.key2.g + obj.key2.h);*/



//Используя циклы, найдите сумму элементов этого объекта.
/*let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let result = 0;
for(let key in obj){
    let subObj = obj[key];
    for(let subKey in subObj){
        result += subObj[subKey]
    }
}
console.log(result)*/



//Используя циклы, найдите сумму элементов этого объекта.
/*let obj = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}

let result = 0;
for(let key in obj){
    let subObj = obj[key];{
        for(let subKey in subObj){
            let subSubObj = subObj[subKey];
            for(let subSubKey in subSubObj){
                result += subSubObj[subSubKey];
            }
        }
    }
}
console.log(result);*/


//Выведите на экран первого студента из третьей группы.
/*let students = {
    'group1': ['name11', 'name12', 'name13'],
    'group2': ['name21', 'name22', 'name23'],
    'group3': ['name31', 'name32', 'name33'],
};
console.log(students.group3[0]);*/


//С помощью вложенных циклов выведите на экран все строки с данными.
/*let data = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
    ],
    4: [
        'data41',
        'data42',
        'data43',
    ],
};

for (let keys in data){
    for(let elem of data[keys]){
        console.log(elem)
    }
}*/


//С помощью вложенных циклов выведите на экран все строки с данными.
/*let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data33',
    },
    {
        1: 'data31',
        2: 'data32',
        3: 'data33',
    },
];

for(let elem of data){
    for(let keys in elem){
        console.log(elem[keys])
    }
}*/



//С помощью вложенных циклов выведите на экран все строки с данными.
/*let data = [
    {
        1: [
            'data111',
            'data112',
            'data113',
        ],
        2: [
            'data121',
            'data122',
            'data123',
        ],
    },
    {
        1: [
            'data211',
            'data212',
            'data213',
        ],
        2: [
            'data221',
            'data222',
            'data223',
        ],
    },
    {
        1: [
            'data411',
            'data412',
            'data413',
        ],
        2: [
            'data421',
            'data422',
            'data423',
        ],
    },
];

for(let elem of data){
    for(let keys in elem){
        for(let subElem of elem[keys]){
            console.log(subElem)
        }
    }
}*/


/*let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

for (let employee of employees){
    console.log(employee.name + ' ' + employee.salary)
}*/


//Выведите на экран сумму зарплат всех работников.
/*let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

let result = 0;
for(let employee of employees){
    result += employee.salary
}
console.log(result);*/

//Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
/*let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let result = 0;
for(let employee of employees){
    if(employee.age >= 30){
        result += employee.salary;
    }
}
console.log(result);*/


//Выведите на экран название месяца, соответствующее значениям переменных lang и month.
/*let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
let lang = 'en';
let month = 5;
console.log(months[lang][month])*/

//Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
/*let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
}
let year = '2019';
let month = 12;
let day = 29;
console.log(affairs[year][month][day])*/


//Автор следующего кода хотел вывести элемент со значением '24': Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.
/*let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
console.log(obj[key1]['key4']);*/ // обращение к элементу всегда должно быть в кавычках(если он текстовый), если элемент внтури переменной, значит без кавычек



//Добавьте в следующий массив еще одного работника:
/*let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
];
employees.push({
    name: 'newName',
    salary: 300,
    age: 22,
})
console.log(employees)*/




//Скопируйте себе следующую структуру для хранения списка дел за определенные даты:
/*let affairs = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
}
//1)Добавьте еще одно дело в дату '2019-12-29'.

affairs["2019-12-29"][3] = 'data24';
console.log(affairs);

//2)Добавьте еще два дела в дату '2019-12-31'.
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41','data42')*/


//Скопируйте себе следующую структуру для хранения списка студентов:
/*    let students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };

//Добавьте нового студента в подгруппу 'subgroup11'.
students.group1.subgroup11.push('student114');
console.log(students);

//Добавьте в первую группу еще одну подгруппу.
students['group1']['subgroup13'] = [];

//Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
students['group4'] = {};
students['group4']['subgroup41'] = [];
students['group4']['subgroup41'].push('student411','student412');*/





//--------------------Математические методы в JavaScript
//Возведите 2 в 10 степень.
//console.log(Math.pow(2,10));

//Найдите квадратный корень из 245.
//console.log(Math.sqrt(245))

//Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
/*let arr = [4, 2, 5, 19, 13, 0, 10];
let result = 0;
for(let elem of arr){
    result += elem;
}
console.log(Math.sqrt(result));*/


//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
/*let root = Math.sqrt(379)
console.log(Math.round(root))
console.log(root.toFixed(1))
console.log(root.toFixed(2))*/


//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
/*console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))*/


//Выведите на экран случайное целое число от 1 до 100.
/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1,100))*/

//С помощью цикла заполните массив 10-ю случайными целыми числами.
/*let arr = [];
for(let i = 0; i < 10; i++){
    arr.push(getRandomInt(1,100))
}
console.log(arr)*/

//Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
/*let a = -3;
let b = 14;
console.log(Math.abs(a - b))*/

//Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
/*let str = 'я учу javascript!'
let subStr = str.substr(1,4)
let subString = str.substring(5,10)
let sLice = str.slice(10,16)
console.log(subStr + ' ' + subString + sLice)*/

//Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
/*let str = 'abcde';
console.log(str.indexOf('a'));*/

//Дана строка. Проверьте, начинается ли эта строка на 'http://'.
/*let strLink = 'h2ttp://qwe.com'
console.log(strLink.startsWith('http://'))*/

//Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
/*let str = '12345';
let arr = str.split('')
console.log(arr)*/

//С помощью метода join слейте его в строку '1-2-3-4-5'.
/*let arr = [1, 2, 3, 4, 5];
let str = arr.join('-')
console.log(str);*/


//Методы для массивов в JavaScript

//Добавьте ему в начало элементы 4, 5, 6.
//let arr = [1,2,3];
/*arr.unshift(4,5,6)
console.log(arr)*/

//Выведите на экран первый/последний элемент этого массива.
//console.log(arr.shift());
//console.log(arr.pop())


//Пусть дан массив ['1', '2', '3', '4', '5', '6']. Давайте сделаем из него строку '16-25-34'. Для решения задачи используем комбинацию методов pop, shift, push и join:
/*let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];

while (arr.length > 0){
    let frst = arr.shift();
    let second = arr.pop();

    let str = frst + second
    result.push(str);
}
console.log(result)*/

//console.log([1, 2, 3, 4, 5].slice(0,3))

//С помощью метода splice преобразуйте массив в следующий:    //-------------------------!! SPLICE
//---- массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент], [вставить элемент]...);

/*let arr = [1, 2, 3, 4, 5];
arr.splice(1,2)
console.log(arr)*/

//С помощью метода splice сделайте из него массив:
/*let arr = [1, 2, 3, 4, 5];
arr.splice(3,0,'a','b','c');
console.log(arr)*/

//С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
/*let arr = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b')
arr.splice(6,0,'c')
arr.splice(8, 0,'e')
console.log(arr)*/

//Преобразуйте последнюю букву строки в верхний регистр.
//let str = 'london';
/*let result = str.slice(0,5) + str.slice(5,6).toUpperCase()
console.log(result)*/

//Преобразуйте первые 2 буквы строки в верхний регистр.
/*let result = str.slice(0,1).toUpperCase() + str.slice(1,2).toUpperCase() + str.slice(2,6)
console.log(result)*/

//Преобразуйте первую букву строки в нижний регистр.
/*let str = 'London';
let result = str.slice(0,1).toLowerCase() + str.slice(1,6)
console.log(result)*/

//Напишите код, который преобразует первую букву каждого слова в верхний регистр.
/*let str = 'word1 word2 word3';
let strToArr = str.split(' ');
for(let i = 0; i < strToArr.length; i++){
    strToArr[i] = strToArr[i].slice(0,1).toUpperCase() + strToArr[i].slice(1)
}
str = strToArr.join(' ')
console.log(str)*/

//Преобразуйте строку 'var_test_text' в 'VarTestText'.
/*let str = 'var_test_text';
let strToArr = str.split('_')
for(let i = 0; i < strToArr.length; i++){
    strToArr[i] = strToArr[i].slice(0,1).toUpperCase() + strToArr[i].slice(1);
}
str = strToArr.join('')
console.log(str)*/

//Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.
/*let str = 'rasta farian targarian fly with'
let toArr = str.split(' ')
toArr.reverse()
str = toArr.join(' ')
console.log(str)*/


/*Код должен найти сумму цифр числа:

    let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
    sum += digit;
}
        //Решение:
console.log(sum);
let num = 12345;
let numToStr = String(num)
let arr = numToStr.split('')
let sum = 0;
for (let digit of arr) {
    sum += +digit;
}
console.log(sum);*/



//функции
//С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.
/*function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function round(num) {
    return num.toFixed(3);
}

let res = round(sum(sqrt(2),sqrt(3),sqrt(4)))
console.log(res)*/


//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
/*function howIter(num) {
    let i = 0
    while(true){
        num = num / 2
        i++
        if (num < 10){
            return i;
        }
    }
}
console.log(howIter(200))*/


//Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
/*let arr = [2,4,6,8,10,11]
function arr2(arr){
    for(let elem of arr){
        if(elem % 2 != 0){
            return false;
        }
    }
    return true;
}
console.log(num2(arr));*/


//Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
/*let number = 1353;
function num1(num){
    let strNum = String(num);
    for(let i = 0; i < strNum.length; i++){
        if (+strNum[i] % 2 == 0){
            return false;
        }
    }
    return true;
}
console.log(num1(number))*/


//Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
/*let arr = [1,2,2,3,4,5];
function doubleElements(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            return true;
        }
    }
    return false;
}
console.log(doubleElements(arr))*/


/*Перепишите ее код в сокращенной форме согласно изученной теории, без if.
function func(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
Решение:
function func(a, b) {
    return a == b
}
console.log(func(2,3))*/



//Практика на функции в JavaScript

//В приведенных ниже задачах вам необходимо будет написать функции.
// Давайте им правильные имена, отражающие их суть, а также при необходимости используйте вспомогательные функции, в том числе полученные в предыдущих заданиях.


//Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
/*function getSumArr(arr){
    let sum = 0;
    for(let elem of arr){
        sum += elem;
    }
    return sum
}
console.log(getSumArr([1,2,3,4,5]))*/


//Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
/*function getDivisorFromNum(num){
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            arr.push(i)
        }
    }
    return arr;
}
console.log(getDivisorFromNum(1024))*/


//Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
/*function getSymbolsFromString(string){
    return string.split('')
}
console.log(getSymbolsFromString('Hello'))*/


//Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
/*function reverseString(string){
    return string.split('').reverse().join('')
}
console.log(reverseString('never'))*/


//Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
/*function toUpperFirstSymbol(str){
    return str[0].toUpperCase() + str.slice(1)
}*/
//console.log(toUpperFirstSymbol('solo'))


//-------Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
/*function toUpperFirstSymWord(string){
    let arr = string.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
}
console.log(toUpperFirstSymWord('so so mo mo'));*/


/*function toUpperFirstSymWord(string){ //с использованием функции которая уже есть
    let arr = string.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = toUpperFirstSymbol(arr[i])
    }
    return arr.join(' ')
}
console.log(toUpperFirstSymWord('so so mo mo'));*/


//Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
/*function fillArr(endNum){
    let arr = []
    for(let i = 1; i <= endNum; i++){
        arr.push(i)
    }
    return arr
}
console.log(fillArr(12));*/


//Сделайте функцию, которая будет возвращать случайный элемент из массива.
/*function getRandomElemArr(arr){
    let i = Math.floor(Math.random() * arr.length)
    console.log(i)
    return arr[i];
}
console.log(getRandomElemArr([1,2,3,4,5,6]))*/


//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
/*function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(isPrime(98))*/


//Сделайте функцию, которая будет проверять пару чисел на дружественность.
// Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот,
// сумма всех собственных делителей второго числа равна первому числу.

/*function isAmicablePair(num1,num2) {
    let sumNum1 = 0;
    let sumNum2 = 0;
    for(let i = 1; i < num1; i++){
        if(num1 % i === 0){
            sumNum1 += i;
        }
    }
    for(let j = 1; j < num2; j++){
        if(num2 % j === 0){
            sumNum2 += j;
        }
    }
    return (sumNum1 === num2 && sumNum2 === num1)
}
console.log(isAmicablePair(220,286))*/

/*function getSumOfDivisor(num){     // -----------------с разбиением одинаковых частей кода на функции
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum;
}*/

/*function isAmicablePair(num1,num2){
    return (getSumOfDivisor(num1) === num2 && getSumOfDivisor(num2) === num1)
}*/
//console.log(isAmicablePair(220,284))


//Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.
/*function isAmicableIn1000(){
    for(let i = 0; i <= 1000; i++){
        for(let j = 0; j <= 1000; j++){             // ------------------МОЖНО ЛИ НЕ ЗАПУСКАТЬ ЦИКЛ 1 000 000 РАЗ
            if (i === j){
                continue;
            }
            if(isAmicablePair(i,j) === true){
                console.log(`Pair is: ${i} : ${j}`)
            }
        }
    }
}
isAmicableIn1000()*/


//Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.
/*function isPerfectNumber(num){
    return getSumOfDivisor(num) === num;
}
console.log(isPerfectNumber(496));*/


//Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.
/*function isLuckyNum(num){
    let numToStr = String(num)
    if(numToStr.length !== 6){
        return 'Enter 6 digit number'
    }
    return (+numToStr[0] + +numToStr[1] + +numToStr[2] === +numToStr[3] + +numToStr[4] + +numToStr[5])
}
console.log(isLuckyNum(900711))*/


//Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.
/*function getSameDivisor(num1,num2){
    let sameDigits = []
    let smallest = num1 > num2 ? num2 : num1
    for (let i = 1; i <= smallest; i++){
        if (num1 % i === 0 && num2 % i === 0){
            sameDigits.push(i)
        }
    }
    return sameDigits
}
console.log(getSameDivisor(24,12))*/


//Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.
/*function translateRus(string){
    let translatedStr = ''
    let converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya',
    }
    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i] && converter[string[i]] !== undefined){
            translatedStr += converter[string[i]]
        } if (converter[string[i]] === undefined){
            translatedStr += string[i]
        }
    }
    return translatedStr;
}
console.log(translateRus('Город Минск 12'))*/

// присваивание исходного кода функции другой переменной
/*function func1(){
    return 3;
}

let func2 = func1;

console.log(func1() + func2())*/


//безимянные функции
//Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.
/*let func =
    function() {
    return 1;
}

let func2 =
    function () {
        return 2;
    }

console.log(func() + func2())*/





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Function Declaration (объявление функции), а второй - Function Expression (функциональное выражение)
/*Первый способ - это просто объявить функцию через function, сразу задав ее имя:
    function func() {
        console.log('!');
    }

func(); // выведет '!'
Второй способ - это сделать безымянную функцию и записать ее в какую-либо переменную:
    let func = function() {
        console.log('!');
    };

func(); // выведет '!'
По научному первый способ называется Function Declaration (объявление функции), а второй - Function Expression (функциональное выражение).*/

/*Разница!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.

    Смотрите пример:

// Обращаемся к функции до ее объявления:
    func(); //выведет '!'

function func() {
    console.log('!');
}
А функциональные выражения создаются в момент выполнения кода и недоступны выше. Поэтому такой код выдаст ошибку:

    func(); //ошибка, такой функции еще нет!

let func = function() {
    console.log('!');
};*/

//!!!!!!!!!!!!!!!!!!!!интерпретатор вначале пробегается по всему документу с кодом и ищет все функции, объявленные как Function Declaration, и только потом начинает выполнять код документа построчно.
//
// Функции, созданные как Function Expression, создаются в тот момент, когда до них доходит интерпретатор. Поэтому они и недоступны выше места своего объявления.

// проверить expression или declaration можно вызвав функцию до ее объявления, если НЕ выдаст ошибку, значит declaration
/*func()
function func() {
    console.log('!');
}*/

// если поставить + перед объявлением функции, то она из declaration станет expression
/*func()
+function func() {
    console.log('!');
}*/


/*!!!!!!!!!!!Учтите, что выражение, в котором участвует функция, должно быть слева от нее.
Если мы что-то пытаемся сделать справа от функции, это не сделает ее функциональным выражением. Пример:
function func() { // это Function Declaration
    console.log('!');
} + 1;*/




//Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
/*let arr = [
    function () {return 1},
    function () {return 2},
    function () {return 3},
]

//Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
console.log(arr[2]() + arr[0]() + arr[1]())

//Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
for(let elem of arr){
    console.log(elem())
}*/


//----------Объект с анонимными функциями в JavaScript

//Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
//С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
/*let obj = {
    func1 : function () {return 1},
    func2 : function () {return 2},
    func3 : function () {return 3},
}*/

//console.log(obj.func1() + obj.func2() + obj.func3())*/

//Переберите созданный объект циклом и выведите результаты работы функций в консоль.
/*for(let keys in obj){
    console.log(obj[keys]())
}*/

//Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
// Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
/*let obj = {
    sum : function (arr) {let result = 0; for (let elem of arr){result += elem}; return result},
    sumSquare : function (arr) {let result = 0; for (let elem of arr){result += elem**2}; return result},
    sumCube : function (arr) {let result = 0; for (let elem of arr){result += elem**3}; return result},
}

console.log(obj.sum([1,2,3]))
console.log(obj.sumSquare([1,2,3]))
console.log(obj.sumCube([1,2,3]))*/


//Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1,
// вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
/*test(
    function () {return 1},
    function () {return 2},
    function () {return 3}
)
function test(func1, func2, func3){
    console.log(func1() + func2() + func3())
}*/


//Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
/* function test(func1,func2,func3) {
    return func1 + func2 + func3;
} */

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
//Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
/*function func1(){
    return 1
}
function func2(){
    return 2
}
function func3(){
    return 3
}
console.log(test(func1(),func2(),func3()))*/

//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
/*let func1 =  function(){
    return 1
}
let func2 =  function(){
    return 2
}
let func3 =  function(){
    return 3
}
console.log(test(func1(),func2(),func3()))*/



//Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
/*function test(func) {
    console.log( func(3) );
}

test(function (num){
    return num * num * num
})*/

//Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
/*function test(func) {
    console.log( func(3) );
}

test(function func(num){
    return num * num * num
})*/


//Переделайте передаваемую функцию на Function Expression с тем же именем func.
/*function test(func) {
    console.log( func(3) );
}
let func =  function(num){
    return num * num * num
}
test(func)*/


//Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
//При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
/*function test(func){
    console.log(func(2,3))
}

test(function (num1,num2){
    return num1+num2
})*/


/*Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
    Пусть функция test возвращает сумму результатов переданных функций:
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.*/
/*function test(num, func1, func2) {
    return func1(num) + func2(num);
}
console.log(test(3,
    function(num){
    return num * num
    },
    function (num){
    return num * num * num
    }))*/


//Сделайте функцию принимающую массив и функцию, которая возвращает массив, квадрат всех элементов
/*function test(arr, func){
    for (let i = 0; i < arr.length; i++){
        arr[i] = func(arr[i])
    }
    return arr;
}

console.log(test([1,2,3], function (elemOfArr){
    return elemOfArr ** 2;
}))*/

//Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа.
//Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
/*function sumSquareCube(num1,num2){
    function square(num1){
        num1 = num1 ** 2
        return num1;
    }
    function cube(num2){
        return num2 ** 3;
    }
    return square(num1) + cube(num2)
}

console.log(sumSquareCube(3,2))*/


//Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2.
//Найдите сумму результатов этих функций.
/*function func1(){
    return function (){
        return 1
    };
}
function func2() {
    return function (){
        return 2
    }
}
console.log(func1()() + func2()())*/


//Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
/*function func(){
    return function (){
        return function (){
            return function (){
                return function (){
                    return '1'
                }
            }
        }
    }
}
console.log(func()()()()())*/


//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
/*function func(num1){
    return function (num2){
        return function (num3){
            return num1 + num2 + num3
        }
    }
}
console.log(func(2)(3)(4))*/


//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
/*function elemToArr(num1){
    return function (num2){
        return function (num3){
            return function (num4){
                return function (){
                    return [num1, num2,num3,num4]
                }
            }
        }
    }
}
console.log(elemToArr(2)(3)(4)(5)())*/



//Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
/*function test(){
    let num  = 1;
    return function (){
        console.log(num);
        num++
    }
}
let func = test();// 1 2 3
func()
func()
func()

let func2 = test();// !!! 1 2 3 AGAIN, имеет СВОЕ, НОВОЕ замыкание
func2()
func2()
func2()*/


//чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
/*function test(){
    let num = 10;
    return function (){
            --num
        if (num < 0){
           console.log('End.')
        } else {
            console.log(num);
        }
    }
}
let func = test();
func();func();func();func();func();func();
func();func();func();func();func();func();*/



/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!В этом случае(ЕСЛИ ПЕРЕМЕННАЯ ГЛОБАЛЬНАЯ) все возвращаемые функции будут изменять эту
глобальную переменную и счетчики будут работать уже зависимо друг от друга:
    let num = 1;
function test() {
    return function() {
        console.log(num);
        num++;
    };
}
let func1 = test(); // первый счетчик
func1();  // выведет 1
func1();  // выведет 2
let func2 = test(); // второй счетчик
func2();  // выведет 3
func2();  // выведет 4*/



//Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
//(Сделать функцию которая сразу вызывается, внутри обычной)
/*let func = (function (){
    let num = 1;
    return function (){
        console.log(num)
        num++
    }
})()
func();
func();
func();*/

//Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
/*let func = (function (){
    let num = 1;
    return function (){
        if (num > 5){
            num = 1;
            console.log(num)
            num++
        } else {
        console.log(num)
        num++
        }
    }
})()
func();func();func();
func();func();
func();func();*/


//!!!Функции-коллбэки в JavaScript
//Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
/* function doubleElemArr(arr, callback){
    let result = [];
    for(let elem of arr){
        result.push(callback(elem))
    }
    console.log(result);
} */
// doubleElemArr([1,2,3,4,5], function(num){
//     return num = num * 2;
// })


//Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
/* doubleElemArr(['123','mar','col'], function(num){
    return num.split('').reverse().join('')
}) */


//Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
/* doubleElemArr(['mar','col','mar','col'], function(str){
    return str.slice(0,1).toUpperCase() + str.slice(1)
}) */


//С помощью следующей функции возведите все элементы массива в куб:
/* function cube(num) {
	return num ** 3;
}
doubleElemArr([1,2,3,4], cube) */


//!!!Стрелочные функции в JavaScript
/* Особое преимущество стрелочные функции имеют в качестве коллбэков. Давайте посмотрим на примере, на сколько упрощается код в таком случае. Возьмем функцию filter из предыдущего урока:
let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem % 2 === 0) {
		return true;
	} else {
		return false;
	}
});
Для начала давайте избавимся от конструкции if и напишем условие просто через оператор ===:
let result = filter([1, 2, 3, 4, 5], function(elem) {
	return elem % 2 == 0;
});
Заменим теперь обычную функцию на стрелочную:
let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0); */


//С помощью рекурсии выведите элементы этого массива в консоль.
/* let arr = [1, 2, 3, 4, 5];
function func(){
    console.log(arr.shift())
    if(arr.length !== 0){
        func()
    }
}
func() */


//С помощью рекурсии найдите сумму квадратов элементов этого массива.
/* let arr = [1, 2, 3, 4, 5];
function getSumSquars(){
    let sum = arr.shift()**2;
    if(arr.length !== 0){
        sum += getSumSquars()
    }
    return sum;
}
console.log(getSumSquars()); */


//!!!!!!РЕКУРСИЯ
//вывести все элементы массива
/* function func(arr){
    for(let elem of arr){
        if (typeof elem === 'object'){
            func(elem)
            } else {
            console.log(elem);
            }
        }
    }
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]); */


//С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
/* function func(obj){
    for(let keys in obj){
        if (typeof obj[keys] === 'object'){
            func(obj[keys])
        } else {
            console.log(obj[keys])
        }
    }
}
func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}) */


//Напишите код, который развернет наш многомерный массив в одномерный. 
/* let flatArr = [];
function func(arr){
    for (let elem of arr){
        if(typeof elem === 'object'){
            func(elem)
        } else {
            flatArr.push(elem);
        }
    }
    return flatArr;
}
console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])) */


//сумма элементов массива
/* function func(arr) {
	let sum = 0;
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func(elem);
		} else {
			sum += elem;
		}
	}
	
	return sum;
}
console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])); */


//С помощью рекурсии найдите сумму элементов этого объекта.
/* function getSum(obj){
    let sum = 0;
    for(let keys in obj){
        if(typeof obj[keys] === 'object'){
            sum += getSum(obj[keys])
        } else {
            sum += obj[keys]
        }
    }
    return sum;
}
console.log(getSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})) */


//С помощью рекурсии слейте элементы этого массива в одну строку:
/* function func(arr){
    let str = ''
    for(let elem of arr){
        if(typeof elem === 'object'){
            str += func(elem)
        } else {
            str += elem
        }
    }
    return str;
}
console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])) */


//Возведите все элементы-числа этого массива в квадрат.
/* function func(arr){
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'object'){
            func(arr[i])
        } else {
            arr[i] = arr[i] ** 2
        }
    }
    return arr;
}
console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]])) */


//Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
/* let arr = [81,64,16,49]
let result = arr.map(function(elem){
    return Math.sqrt(elem)
})
console.log(result) */


//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
/* let arr = ['1','2','23']
let result = arr.map(function(elem){
    return elem += '!'
})
console.log(result)*/


//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
/* let arr = ['sad','bad','mad'];
let res = arr.map(function(elem){
    return elem.split('').reverse().join('')
})
console.log(res) */


//Используя метод map преобразуйте этот массив в следующий:
/* let arr = ['123', '456', '789'];
let res = arr.map(function(elem){
    let subArr = []
    for(let i = 0; i < elem.length; i++){
        subArr.push(elem[i])
    }
    return subArr
})
console.log(res) */


//Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
/* let arr = [1,2,3,4];
let sum = 0;
arr.forEach(function(elem){
    sum += elem ** 2;
})
console.log(sum) */


//METHOD FILTER
//Дан массив с числами. Оставьте в нем только положительные числа.

//let arr = [1,2,-4,3,5,6,2,1,-6]
/* let result = arr.filter(function(elem){
    return elem >= 0
})
console.log(result) */
//--стрелочная
//console.log(arr.filter(elem => elem >= 0))


//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
/* let arr = [0,1,5,9,12,15,7]
console.log(arr.filter(elem => elem > 0 && elem < 10)) */

//Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
/* let arr = [0,1,5,9,12,15,7]
let result = arr.filter(function(elem, index){
    return elem * index < 30;
})
console.log(result) */


//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
/* let arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter(elem => typeof elem !== 'object')) */


//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
/* let arr = [1,2,-4,-3,5,-6,2,1,-6]
console.log(arr.filter(elem => elem < 0).length) */


//METHOD EVERY
//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
/* let arr = [0,1,5,9,12,15,7]
console.log(arr.every(elem => elem >= 0)) */

//Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
/* let arr = [5,2,3,1]
let result = arr.every(function(elem,index){
    return elem * index < 30
})
console.log(result) */


// SPREAD and REST
//Найдите с помощью приведенной функции сумму элементов массива.
/* let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr)) */


//Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
/* let arr = [1, 2, 3, 4, 5];
let minFromArr = Math.min(...arr)
console.log(minFromArr) */


//Оператор spread и слияние массивов
/* let arr1 = ['a', 'b', 'c'];
let arr2 = [1, ...arr1, 2, 3]; */

/* let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];
let arr  = [0, ...arr3];
console.log(arr); */  //[0,1,2,3,4,5,6,7,8,9]


//Оператор spread для строк и чисел в JavaScript
//!!!!!!!!!!!!!         ...'abcde'; // разобьет строку в символы через запятую: 'a','b','c','d','e'
//А можно преобразовать этот результат в массив: let arr = [...'abcde']; // получим массив ['a', 'b', 'c', 'd', 'e']

/* Оператор spread НЕ применим к числам:
let arr = [...12345]; // будет ошибка
Для решения проблемы следует преобразовывать число в строку, вот так:
let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5'] */


//Применение операторов rest и spread в JavaScript
//Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
/* function average(...nums){
    let sum = 0
    for(let num of nums){
        sum += num
    }
    return sum / nums.length;
}
console.log(average(1,2,3)) */


/* !!!!!!!!!!!!!!!Функция, сливающая массивы в двухмерный
Давайте сделаем функцию unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный.
Вот пример работы описанной функции:
let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]
Не смотря на достаточную сложность функции, ее реализация с помощью оператора rest будет очень лаконичной:
function unite(...arrs) {
	return arrs;
} */

// через spread написать функцию, которая делает один массив из произвольного кол-ва массивов, переданных параметром
/* function merge(...arrs) {
	return [].concat(...arrs);
}
let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);  */


/* В следующем коде части массива записываются в соответствующие переменные:
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории. */
//РЕШЕНИЕ
/* let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname,department, position, salary] = arr; */


/* В следующем коде части массива записываются в соответствующие переменные:
function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}
let arr = func();
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории. */
//РЕШЕНИЕ
/* function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name, surname, department, position, salary] = func()
console.log(salary) */





















































