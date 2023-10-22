function loveCalculator () {
    let firstName = prompt('Ваше имя?', '');
    let secondName = prompt('Имя второй половинки?', '');
    var result = Math.random();
    alert(`${firstName} подходит ${secondName} на ${result.toFixed(2) * 100} процентов!`)
}

function BMICalculator() {
    let height = prompt('Введите ваш рост(в см)', '') / 100;
    let weight = prompt('Введите ваш вес(в кг)', '');
    let bmi = weight / height**2;
    let bmiResult;
    if (bmi.toFixed(2) <= 18.5) {
        bmiResult = "недостаточный вес";
    } else if(bmi.toFixed(2) <= 25) {
        bmiResult = "нормальный вес";
    } else if(bmi.toFixed(2) <= 30) {
        bmiResult = "излишек веса";
    } else if(bmi.toFixed(2) > 30) {
        bmiResult = "ожирение";
    }
    alert(`Ваш индекс массы тела равен ${bmi.toFixed(2)}. У вас ${bmiResult}!`)
}

function yearCalculator() {
    let year = prompt('Введите год', '');
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        alert(`${year} является високосным годом!`)
    } else {
        alert(`${year} не является високосным годом!`);
    }
}

function payCalculator() {
    var names = prompt("Введите имена через запятую:").split(",");
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex].trim();
    alert(`Оплачивать будет ${randomName}`);
}