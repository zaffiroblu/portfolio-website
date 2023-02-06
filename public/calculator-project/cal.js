// Welcome to my calculator code!
// Yes, there are more efficient ways of doing this, but
// here you get a glimpse into the way my mind solves problems
// when it's still learning and is not yet able to find
// the most condensed answer.
// In such situations, I tend to split problems up and solve them
// individually with smaller functions, then write other functions that
// bundle the smaller ones together.
// Here we go!

//---------------------START---------------------------------

// Here I create variables for 1) the value actively
// being entered by the user, 2) the value previously entered, and
// 3) the operator (+, -, etc.) entered.
let activeValue = '';

let storedValue = '';

let storedOperator = '';

// This grabs the display area of the DOM:
const displayElement = document.getElementById('display');

///--- Here are my click events for the operators. They 1) fire the
// heavy-lifter function "checkAndEvaluate" found lower in the code,
// 2) send an operator to the storedOperator variable, and 3) erase
// the activeValue variable above, in case the user has entered something
// previously.
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

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '+';
	activeValue = '';
});

// Equals is a bit different -- it erases the storedOperator:
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
	checkAndEvaluate();
	storedOperator = '';
	activeValue = '';
});

// Clear is also a bit different, as it essentially erases everything:
const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
	activeValue = '';
	storedValue = '';
	storedOperator = '';
	displayElement.textContent = '0';
	pointButton.disabled = false;
});

// Backspace lets the user erase only the final digit
// in the concatenated string of digits currently in the
// display area.
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

// This allows the point(.) button to only be shown once
// within the active display area, to prevent errors in the
// calculations:
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

// This function 1) takes the operator and 2) uses it to perform the operation on the activeValue and storedValue variables.
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
// area is not longer than 15 digits.
function checkActiveLength(value) {
	if (value.length > 15) {
		displayElement.textContent = 'Too large. Please press "Clear."';
		return false;
	}
	return true;
}

// This is a function to "push"
// the value of the clicked integer buttons (0, 1, 2 etc.) to the activeValue array
// at the top of this file, then concatenate multiple button presses.
// Note that clicking each integer button in the DOM/HTML fires off this
// function with the appropriate buttonValue as an argument.
let pushToActiveValue = (buttonValue) => {
	activeValue += buttonValue.toString();
	displayElement.textContent = activeValue;
	checkActiveLength(activeValue);
};

// This is my rounding function, so all results are rounded at the 3rd decimal place:
const roundAccurately = (number) => Number(Math.round(number + 'e3') + 'e-3');

// This function is a heavy lifter: It 1) checks to make sure the
// active length is not too long, 2) fires off the "operate" function
// if there are values both in activeValue and storedValue,
// and converts those values from a string to a decimal number,
// 3) fires the rounding function and 4) displays the rounded result.
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

//------------- The End! Hope you enjoyed that little trip into my learning head.-----

// After talking to my mentor, we agreed on a more condensed solution, which would look
// something like this:
function performPendingCalculation() {
	// - performs the stored operation on the stored value and the active value,
	// if all three are defined
	// (e.g. when pressing "1 + 1 +", this will compute and show "2" after the second "+")
	// - also rounds the result
	// - throws an error if the result cannot be computed (e.g. "1 / 0")
	// - performs operate(...)
	// - sets the textContent of the displayElement
	// - throws an error if the text doesn't fit
	// - triggers the function displayValue(result)
}

// There would also be a function for displaying the result...
function displayValue(value) {}

// ... and for starting a new calculation.
function startNewCalculation(operation) {}

// I decided not to implement these suggestions and simply move on to other projects.
// When I have some extra time one fine day, I will revisit this lovely little practice project and refactor!
