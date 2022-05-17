var num1 = '';
var num2 = '';
var operation = null;
var resetText = false;

const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-op]');
const screenTextBot = document.getElementById('screenTextBot');
const screenTextTop = document.getElementById('screenTextTop');
const equalButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')

numButtons.forEach((button) => 
    button.addEventListener('click', () => 
    firstNum(button.textContent))
)

opButtons.forEach((button) =>
button.addEventListener('click', () => operatorSelected(button.textContent))
)

equalButton.addEventListener('click', () => equalClicked())

clearButton.addEventListener('click', () => clear())

function firstNum(num) {
    if (resetText || screenTextBot.textContent === '0') {
        resetBotScreen();
    }
    screenTextBot.textContent += num;
}

function operatorSelected(operator) {
    operation = operator;
    num1 = screenTextBot.textContent;
    screenTextTop.textContent = num1 + ' ' + operator;
    resetText = true;
}

function resetBotScreen() {
    screenTextBot.textContent = '';
    resetText = false;
}

function equalClicked() {
    if (operation == null) return;
    num2 = screenTextBot.textContent;
    var result = op(operation, num1, num2);
    screenTextTop.textContent = num1 + ' ' + operation + ' ' + num2;
    screenTextBot.textContent = result;
}

function clear() {
    num1 = '';
    num2 = '';
    operation = null;
    resetText = false;
    screenTextBot.textContent = '';
    screenTextTop.textContent = '';
}

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);

}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2){
    return (num1 / num2);
}


function op(operator, a, b) {
    num1 = Number(a);
    num2 = Number(b);
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}