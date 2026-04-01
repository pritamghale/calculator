const regex = /[*/+%^-]/;

function add(currentvalue, previousValue) {
    return parseFloat(currentvalue) + parseFloat(previousValue)
}

function substract(currentvalue, previousValue) {
    return parseFloat(previousValue) - parseFloat(currentvalue)
}

function multiply(currentvalue, previousValue) {
    return parseFloat(currentvalue) * parseFloat(previousValue)
}

function divide(currentvalue, previousValue) {
    return parseFloat(previousValue) / parseFloat(currentvalue)
}

function modulus(currentvalue, previousValue) {
    return parseFloat(previousValue) % parseFloat(currentvalue)
}

function exponent(currentvalue, previousValue) {
    return parseFloat(Math.pow(previousValue, currentvalue))
}

function operate(operator, numOne, numTwo) {
    switch (operator) {
        case '+':
            return add(numOne, numTwo)
        case '-':
            return substract(numOne, numTwo)
        case '*':
            return multiply(numOne, numTwo)
        case '/':
            return divide(numOne, numTwo)
        case '%':
            return modulus(numOne, numTwo)
        case '^':
            return exponent(numOne, numTwo)
    }
}


let previousValue = null
let currentvalue = null
let operator = null
let temp = null
let placeholder = ''

function calculate() {
    let mainDisplay = document.getElementById('display')
    let menupad = document.querySelector('.menupad')
    menupad.addEventListener('click', (event) => {
        let choice = event.target.id

        if (choice === '.') {
            if (!placeholder.includes('.')) {
                placeholder = placeholder.concat(choice)
            }
        } else if (choice === 'ac') {
            previousValue = null
            currentvalue = null
            operator = null
            temp = null
            placeholder = ''
            mainDisplay.value = placeholder

        } else if (choice === 'del') {
            placeholder = placeholder.slice(0, -1)
            mainDisplay.value = placeholder
            currentvalue = parseFloat(placeholder)
        } else if (regex.test(choice)) {
            let numberPart = placeholder
            if (numberPart === '') {
                operator = choice
            } else {
                currentvalue = parseFloat(numberPart)
                placeholder = ''
            }
            if (previousValue !== null && operator !== null) {
                temp = operate(operator, currentvalue, previousValue)
                mainDisplay.value = parseFloat(temp)
                currentvalue = parseFloat(temp)
            }
            previousValue = currentvalue
            operator = choice
        } else if (choice === '=') {
            let numberPart = placeholder
            if (numberPart === '') {
                placeholder = ''
            } else {
                currentvalue = parseFloat(numberPart)
                placeholder = ''
            }
            if (previousValue !== null && operator !== null) {
                temp = operate(operator, currentvalue, previousValue)
                mainDisplay.value = parseFloat(temp)
                currentvalue = parseFloat(temp)
            }
            previousValue = currentvalue
            operator = null
        } else {
            placeholder = placeholder.concat(choice)
            mainDisplay.value = placeholder
        }

    })
}
calculate()