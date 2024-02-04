'use strict';


/**
 * adds an inventory item
 * Adds an item to the system
 *
 * body InventoryItem Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.calculateNumbers = function( body) {
  return new Promise(function(resolve, reject) {
    const { num1, num2, operation } = body;

    // Input validation
    if (isNaN(num1) || isNaN(num2) || !operation) {
      reject('Invalid input. Please provide valid numbers or operation.');
    }

    // Convert num1 and num2 to numbers
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    let result;

    // Perform the operation
    switch (operation) {
      case 'add':
        result = num1Value + num2Value;
        break;
      case 'subtract':
        result = num1Value - num2Value;
        break;
      case 'multiply':
        result = num1Value * num2Value;
        break;
      case 'divide':
        if (num2Value === 0) {
          return reject('Cannot divide by zero.');
        }
        result = num1Value / num2Value;
        break;
      default:
        reject('Invalid operation. Please provide a valid operation.[add, subtract, multiply or divide]');
    }

    resolve({result});
  });
}

