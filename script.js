function add(numOne, numTwo) {
    return numOne + numTwo
}

function substract(numOne, numTwo) {
    return numTwo - numOne
}

function multiply(numOne, numTwo) {
    return numOne * numTwo
}

function divide(numOne, numTwo) {
    return numTwo / numOne
}

function modulus(numOne, numTwo) {
    return numTwo % numOne
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
    }
}

function demo() {
    let previousValue = 0
    let currentvalue = 0
    let menupad = document.querySelector('.menupad')
    menupad.addEventListener('click', (event) => {

    })
}