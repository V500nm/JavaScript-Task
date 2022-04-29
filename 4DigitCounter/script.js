const displayInput = document.querySelector('.inputDiv');
let counter = 0;

function updateDisplay() {
    const displayNum = addPaddingFourDigit(counter);
    const displayNumArray = displayNum.split("");
    [...displayInput.children].forEach(function(box, index) {
        box.innerText = displayNumArray[index];
    });
}

function addPaddingFourDigit(value) {
    const numToStr = value.toString();
    if (numToStr.length === 1) {
        return "000" + value;
    } else if (numToStr.length === 2) {
        return "00" + value;
    } else if (numToStr.length === 3) {
        return "0" + value;
    } else {
        return value;
    }
}

updateDisplay();

function increment() {
    if (counter < 9999) {
        counter++;
        updateDisplay();
    }
}

function decerement() {
    if (counter > 0000) {
        counter--;
        updateDisplay();
    }
}

function reset() {
    counter = 0;
    updateDisplay();
}