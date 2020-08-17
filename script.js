//Fumctions for the operators

function add(a,b) {
    return a + b;
    };

function subtract(a,b) {
    return a - b;
    };

function multiply(a,b) {  
    return a * b;
    };

function division(a,b) {  
    return a / b;
    };
  
//Funciton to operate the operations  
  
function operate(a, operator, b) {

    if (operator == add) {
        
        return add(a,b);
        
    } else if (operator == subtract) {
        
        return subtract(a,b);
        
    } else if (operator == multiply) {
        
        return multiply(a,b);

    } else if (operator == division) {
        
        return division(a,b);

    } else {
        
        return null;

    }

}

console.log(operate(7, division, 9));

// Functions to populate display with integers and operators



/*const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnZero = document.getElementById("btnZero");
const btnComma = document.getElementById("btnComma");
const btnClear = document.getElementById("btnClear");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnEquals = document.getElementById("btnEquals");*/

let calcStore = [];

let btnNumbers = document.querySelectorAll(".btnNumbers");

function toDisplay(){

    let display = document.getElementById("displayText");

        for (const button of btnNumbers) {
            button.addEventListener("click", () => {
                display.textContent = button.textContent;
                return calcStore.push(button.textContent);
                
            });
        }
        
    
}

let sum = calcStore.reduce(function(a,b) {

    return a + b;

}, 0);

toDisplay();





