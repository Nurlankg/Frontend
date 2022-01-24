function calculator() {
    let fistNumber = Number(prompt('Введите первое число'));
    let secondNumber = Number(prompt('Введите второе число'));
    let operator = prompt('Введите нужную операция');

    if(operator == '+') {
        console.log(fistNumber + secondNumber);
    }
    else if(operator == '-') {
        console.log(fistNumber - secondNumber);
    }
    else if(operator == '*') {
        console.log(fistNumber * secondNumber);
    }
    else if(operator == '/') {
        console.log(fistNumber / secondNumber);
    }

}
calculator();

function loginParol() {
    let login = prompt('Введите логи');
    let Parol = prompt('Введите пароль');
    let result = login + Parol;

    if(result == 'adminparol') {
        console.log('Welcome')
    }
    else if(login != 'admin') {
        console.log('неправильно ввел логин')
    }
    else if(Parol != 'parol') {
        console.log('неправильно ввел пароль')
    }
}
loginParol()