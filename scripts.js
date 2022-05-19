var num1 = '';
var num2 = '';
var numLength = '';
var numTooLong = false;
var operation = null;
var resetText = false;

const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-op]');
const decButton = document.getElementById('decimal');
const delButton = document.getElementById('delete');
const screenTextBot = document.getElementById('screenTextBot');
const screenTextTop = document.getElementById('screenTextTop');
const equalButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')
const warnText = document.getElementById('warningText');

numButtons.forEach((button) => 
    button.addEventListener('click', () => 
    firstNum(button.textContent))
)

opButtons.forEach((button) =>
button.addEventListener('click', () => operatorSelected(button.textContent))
)

delButton.addEventListener('click', () => deleteClicked())
decButton.addEventListener('click', () => decimalClicked())
equalButton.addEventListener('click', () => equalClicked())
clearButton.addEventListener('click', () => clear())

function deleteClicked() {
    screenTextBot.textContent = screenTextBot.textContent.toString().slice(0,-1)
}

function decimalClicked() {
    if (screenTextBot.textContent.includes('.')) return;
    screenTextBot.textContent += '.';
    return;
}

function firstNum(num) {
    if (resetText || screenTextBot.textContent === '0') {
        resetBotScreen();
    }
    if (numTooLong === false) {
    screenTextBot.textContent += num;
    numLength = screenTextBot.textContent;
    maxDisplaySize(numLength);
    }
}

function operatorSelected(operator) {
    operation = operator;
    num1 = screenTextBot.textContent;
    screenTextTop.textContent = num1 + ' ' + operator;
    warningText.textContent = "";
    numTooLong = false;
    resetText = true;
}

function resetBotScreen() {
    screenTextBot.textContent = '';
    resetText = false;
}

function maxDisplaySize(num) {
    if (num.length >= 8) {
        warningText.textContent = "Too many digits";
        numTooLong = true;
        return;
    }
    return false;
}

function equalClicked() {
    if (operation == null) return;
    num2 = screenTextBot.textContent;
    if (operation == '÷' && num2 == 0) {
            screenTextBot.textContent = "can't divide by zero";
            screenTextTop.textContent = 'why :(';
            return;
    }
    var result = op(operation, num1, num2);
    screenTextTop.textContent = num1 + ' ' + operation + ' ' + num2;
    screenTextBot.textContent = result;
    warningText.textContent = "";
}

function clear() {
    num1 = '';
    num2 = '';
    operation = null;
    resetText = false;
    numTooLong = false;
    warningText.textContent = "";
    screenTextBot.textContent = '0';
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

function divide(num1, num2) {
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