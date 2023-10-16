console.log("Hello World!")
var number_1 = 5;
var number_2 = 10;
console.log(`Первое число: ${number_1},\nВторое число: ${number_2}`)
var result = number_1 + number_2;
console.log(`Сложение 2=х чисел: ${result}`)
var somestring = "Какая-то строка";
console.log(`Нижний регистр: ${somestring.toLowerCase()},\nВерхний регистр: ${somestring.toUpperCase()}`)
console.log(`Вычитание: ${number_2 - number_1}, \nУмножение: ${number_1 * number_2},\nВозведение в квадрат: ${number_1**2}, 
\nДеление: ${number_2 / number_1}, \nДеление с остатком: ${21 % number_1}`)
//Написать функцию для сложения 2х переменных.
function sum(a,b) {
    return a + b;
}
console.log(`Функция сложения (числа): ${sum(number_1, number_2)}`)
var hello = "Hello ";
var world = "World!";
console.log(`Функция сложения (текст): ${sum(hello, world)}`)
//Числа Фиббоначи
var i;
var fib = [0, 1];
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}