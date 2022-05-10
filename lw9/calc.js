function validateParentheses(expression) {
    const parentheses = expression.replace(/[^()]/g, '');
    const stack = [];
    for (let i = 0; i < parentheses.length; i++) {
        if (parentheses[i] == '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
}

function validateSymbols(expression) {
    const invalidSymbols = expression.replace(/[0-9, (, ), +, -, /, *, ' ']/g, '');
    console.log(invalidSymbols);
    return invalidSymbols === '' ? true : false;
}

function calculateOperation(operator, operand1, operand2) {
    if (operator === '+') return operand1 + operand2;
    if (operator === '-') return operand1 - operand2;
    if (operator === '*') return operand1 * operand2;
    if (operator === '/') return operand1 / operand2;
}

function calc(str) {
    if (!validateParentheses(str)) {
        return 'invalid expression, parentheses does not match';
    }
    str = str.replace(/[(, )]/g, ' ');
    str = str.replace(/ +/g, ' ').trim();
    const operators = ['+', '-', '*', '/'];
    const arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arr[i] = parseFloat(arr[i]);
        }
    }

    let i = 0;
    while (i < arr.length - 2) {
        if (operators.indexOf(arr[i]) != -1 && !isNaN(arr[i+1]) && !isNaN(arr[i+2])) {
            arr.splice(i, 3, calculateOperation(arr[i], arr[i + 1], arr[i + 2]));
            i = 0;
            continue;
        }
        i++;
    }

    if (arr.length > 1 || isNaN(arr[0])) {
        return 'Wrong input';
    }
    else {
        return arr[0];
    }
}