let currentValue = 0;
let operand1 = 0;
let operand2 = 0;
let whatMathAreWeDoing = '';
let doingSomeMath = false;
let resetInput = false

// on page load write a secret message to the browser console
document.addEventListener('DOMContentLoaded', () => {
    console.log('secret message');
    document.getElementById('txtResults').value = '0';
});

const addClick = () => {
    operand1 = Number(document.getElementById('txtResults').value);
    whatMathAreWeDoing = 'add';
    resetInput = true;
    doingSomeMath = true;

};

const numberClick = (x) => {
    if (doingSomeMath) {
        if (resetInput) {
            document.getElementById('txtResults').value = x.toString();
            resetInput = false;
        } else {
            document.getElementById('txtResults').value += x;
        }
    } else {
        const currentValue = document.getElementById('txtResults').value;
        if (currentValue.length < 16) {
            if (currentValue === '0') {
                document.getElementById('txtResults').value = x;
            } else {
                document.getElementById('txtResults').value += x;
            }
        }
    }
};

const acClick = () => {
    document.getElementById('txtResults').value = '0';
    runningTotal = 0;
    operand1 = 0;
    operand2 = 0;
    doingSomeMath = false;
    whatMathAreWeDoing = '';
    resetInput = false;
};

const timesClick = () => {
    operand1 = Number(document.getElementById('txtResults').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'multiply';
};

const divideClick = () => {
    operand1 = Number(document.getElementById('txtResults').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'divide';
};

const minusClick = () => {
    operand1 = Number(document.getElementById('txtResults').value);
    doingSomeMath = true;
    resetInput = true;
    whatMathAreWeDoing = 'subtract';
};

const decimalClick = () => {
    if (resetInput){
        document.getElementById('txtResults').value = '0.';
        resetInput = false;
    } else {
        const currentValue = document.getElementById('txtResults').value;
        if (currentValue.length < 16 && !currentValue.includes('.')) {
            document.getElementById('txtResults').value += '.';
        }
    }
};

const equalClick = () => {
    if (doingSomeMath) {
        operand2 = Number(document.getElementById('txtResults').value);
        const hasDecimals = operand1.toString().includes('.') || operand2.toString().includes('.');
    
        if (hasDecimals) {
            if (whatMathAreWeDoing === 'add') {
                runningTotal = bigDecimal.add(operand1, operand2);
            } else if (whatMathAreWeDoing === 'multiply') {
                runningTotal = bigDecimal.multiply(operand1, operand2);
            } else if (whatMathAreWeDoing === 'subtract') {
                runningTotal = bigDecimal.subtract(operand1, operand2);
            } else if (whatMathAreWeDoing === 'divide') {
                runningTotal = bigDecimal.divide(operand1, operand2);
            } else {
                console.log('all is lost!');
            }        
        } else {
            if (whatMathAreWeDoing === 'add') {
                runningTotal = operand1 + operand2;
            } else if (whatMathAreWeDoing === 'multiply') {
                runningTotal = operand1 * operand2;
            } else if (whatMathAreWeDoing === 'subtract') {
                runningTotal = operand1 - operand2;
            } else if (whatMathAreWeDoing === 'divide') {
                runningTotal = operand1 / operand2;
            } else {
                console.log('all is lost!');
            }
        }
        document.getElementById('txtResults').value = runningTotal;
    }
};

    const delClick = () => {
        const currentValue = document.getElementById('txtResults').value;
        if (currentValue !== '0') {
            if (currentValue.length === 1) {
                document.getElementById('txtResults').value = '0';
            } else {
                const newValue = currentValue.substring(0, currentValue.length - 1);
                document.getElementById('txtResults').value = newValue;
            }
        }
    };




// const clickme = (c) => {
//     // alert('you can\'t type that');
    
//     for (let i = 1; i <= 5; i++) {
//     lognumbers(i, 12);
//     }
// };

// const lognumbers = (multiplier, maxMultiplier) => {
//     let x = '';
//    for (let m = 1; m <= maxMultiplier; m++) {
//        let b = multiplier * m;
//        x = x + b + ', ';
//    }
//    console.log(x); 
// };


