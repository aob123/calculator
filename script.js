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