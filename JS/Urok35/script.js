// let ttl = document.querySelectorAll(".body_product > .ttl");
// console.log(ttl);

// for (let text of ttl){
//     console.log(text);
// }

// var elements = document.getElementsByClassName("ul_li");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.querySelectorAll(".price");
//     console.log(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++){
//     elements[i].addEventListener('click', myFunction, false);
// }

// var myFunction1 = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//     console.log(attribute[1].innerText);
// };

// for (var i = 0; i < elements.length; i++){
//     elements[i].addEventListener('click', myFunction1, false);
// }

// function Radius() {
//     let radius = prompt('Введите значение радиуса');
//     let result = radius * 2;
//     alert(result);
// }
// Radius();

// function stepen() {
//     let stepen = prompt('Введите число');
//     let result = stepen * stepen;
//     alert(result);
// }
// stepen();

// function Radius() {
//     let radius = prompt('Введите значение радиуса');
//     let result = radius * 2 * 3.14;
//     alert('Площадь круга'+ result);
// }
// Radius();

// function trugol() {
//     let a = prompt('введите значение длины');
//     let b = prompt('введите значение ширины');
//     let result = a * b;
//     alert('Площадь прямоугольника' + result);
// }
// trugol();

// function summa(){
//     let a = Number(prompt('введите значение'));
//     let b = Number(prompt('введите значение'));
//     let result = a + b;
//     console.log(result.toFixed(0));
// }
// summa();


// var object = {0: 'first', 1: 'second', 2: 'third', length: 3};

// object.__proto__ = Array.prototype;

// console.log(object);

let arr = [];
let name1 = prompt('Введите имя');
let surname = prompt('ВВедите фамилию');
let option = prompt('Ведите дополнительные параметры о себе')
let option1 = prompt('Ведите дополнительные параметры о себе')
let option2 = prompt('Ведите дополнительные параметры о себе')
let option3 = prompt('Ведите дополнительные параметры о себе')
let option4 = prompt('Ведите дополнительные параметры о себе')
arr.push(name1, surname, option, option1, option2, option3, option4);
console.log(arr.pop());
console.log(arr);