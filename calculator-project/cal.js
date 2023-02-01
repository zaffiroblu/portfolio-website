//Display value array:
let activeValue = '';

// let concatenatedValue = activeValue.join('');
let storedValue = '';

// This is just for testing the operator buttons, can be deleted later:
let storedOperator = '';

// This intially sets my display area to "0".
const displayElement = document.getElementById('display');

///--- Here are my click events for the operators, "=", "clear" and "backspace" and "."
const dividedByButton = document.getElementById('divided-by');
dividedByButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '/';
	activeValue = '';
});

const timesButton = document.getElementById('times');
timesButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '*';
	activeValue = '';
});
const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '-';
	activeValue = '';
});

// addition operator
const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => {
	if (inErrorState) {
		return;
	}
	enablePointButton();
	try {
		performPendingCalculation();
		startNewCalculation('+');
	} catch {
		enterErrorState();
	}
});

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '';
	activeValue = '';
});

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
	activeValue = '';
	storedValue = '';
	storedOperator = '';
	displayElement.textContent = '0';
	pointButton.disabled = false;
});

const backSpace = document.getElementById('backspace');
backSpace.addEventListener('click', () => {
	if (activeValue.length >= 2) {
		let backspacedActiveValue = activeValue.slice(0, -1);
		activeValue = backspacedActiveValue;
		displayElement.textContent = activeValue;
	} else {
		displayElement.textContent = '0';
		activeValue = '';
	}
});

const pointButton = document.getElementById('point');

pointButton.addEventListener('click', () => {
	pushToActiveValue('.');
	pointButton.disabled = true;
});

//Here are the functions for the invididual opertions: add, subtract, multiply, divide.
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

// The function that performs the correct operation on
// 1) activeValue, 2) storedValue, 3) operator.
const operate = (operator) => (num1, num2) => {
	if (operator == '+') {
		return add(num1, num2);
	} else if (operator == '-') {
		return subtract(num1, num2);
	} else if (operator == '*') {
		return multiply(num1, num2);
	} else if (operator == '/') {
		return divide(num1, num2);
	}
};

// This function checks to make sure the string of digits in the display
// aread is not too long.
function checkActiveLength(value) {
	if (value.length > 15) {
		displayElement.textContent = 'Too large. Please press "Clear."';
		return false;
	}
	return true;
}

//This is a function to push the value of the clicked calculator button to the
//activeValue array, then concatenate multiple button presses.
let pushToActiveValue = (buttonValue) => {
	activeValue += buttonValue.toString();
	displayElement.textContent = activeValue;
	checkActiveLength(activeValue);
};

// This is my rounding function, so all results are rounded at the 3rd decimal place:
const roundAccurately = (number) => Number(Math.round(number + 'e3') + 'e-3');

// The function that gets called to check values and evaluate them.
function checkAndEvaluate() {
	if (!checkActiveLength(activeValue)) {
		return;
	}
	if (storedValue && storedOperator) {
		let result = operate(storedOperator)(
			parseFloat(storedValue),
			parseFloat(activeValue)
		);
		let roundedResult = roundAccurately(result);
		displayElement.textContent = roundedResult;
		storedValue = roundedResult;
	} else {
		let roundedActiveValue = roundAccurately(activeValue);
		storedValue = roundedActiveValue;
		displayElement.textContent = roundedActiveValue;
	}
}

function performPendingCalculation() {
	// performs the stored operation on the stored value and the active value,
	// if all three are defined
	// e.g. when pressing "1 + 1 +", this will compute and show "2" after the second "+"
	// also rounds the result
	// throws an error if the result cannot be computed (e.g. "1 / 0")
	// operate(...)
	// sets the textContent of the displayElement
	// throws an error if the text doesn't fit
	// displayValue(result)
}

function startNewCalculation(operation) {}

function displayValue(value) {}

// console.log(activeValue);
// console.log(typeof activeValue);
// console.log(storedValue);
// console.log(typeof storedValue);
// console.log(storedOperator);
// console.log(typeof storedOperator);
// console.log('END OF BUTTON STATUS');

// console.log(activeValue);
// console.log(typeof activeValue);
// console.log(storedValue);
// console.log(typeof storedValue);
// console.log(storedOperator);
// console.log(typeof storedOperator);
//

// function checkIfZeroDivZero(result) {
// 	if (storedOperator == '/' && storedValue == '0' && result == '0') {
// 		displayElement.textContent = 'Cannot calculate. Please press "Clear."';
// 		return true;
// 	}
// 	return false;
// }

// if (checkIfZeroDivZero(roundedResult)) {
//     return;
// }

// Click events for all the buttons + function pushToDisplay to push each button value to the array activeValue.
// const zeroButton = document.getElementById('zero');
// zeroButton.addEventListener('click', () => pushToActiveValue(0));

// const oneButton = document.getElementById('one');
// oneButton.addEventListener('click', () => pushToActiveValue(1));

// const twoButton = document.getElementById('two');
// twoButton.addEventListener('click', () => pushToActiveValue(2));

// const threeButton = document.getElementById('three');
// threeButton.addEventListener('click', () => pushToActiveValue(3));

// const fourButton = document.getElementById('four');
// fourButton.addEventListener('click', () => pushToActiveValue(4));

// const fiveButton = document.getElementById('five');
// fiveButton.addEventListener('click', () => pushToActiveValue(5));

// const sixButton = document.getElementById('six');
// sixButton.addEventListener('click', () => pushToActiveValue(6));

// const sevenButton = document.getElementById('seven');
// sevenButton.addEventListener('click', () => pushToActiveValue(7));

// const eightButton = document.getElementById('eight');
// eightButton.addEventListener('click', () => pushToActiveValue(8));

// const nineButton = document.getElementById('nine');
// nineButton.addEventListener('click', () => pushToActiveValue(9));
