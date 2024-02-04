// service.test.js

const { calculateNumbers } = require('../service/CalculatorService');

describe('calculateNumbers function', () => {
    it('should correctly add two numbers', async () => {
        const body = { num1: 5, num2: 3, operation: 'add' };
        const result = await calculateNumbers(body);
        expect(result).toEqual({ result: 8 });
    });

    it('should correctly subtract two numbers', async () => {
        const body = { num1: 10, num2: 4, operation: 'subtract' };
        const result = await calculateNumbers(body);
        expect(result).toEqual({ result: 6 });
    });

    it('should correctly multiply two numbers', async () => {
        const body = { num1: 6, num2: 7, operation: 'multiply' };
        const result = await calculateNumbers(body);
        expect(result).toEqual({ result: 42 });
    });

    it('should correctly divide two numbers', async () => {
        const body = { num1: 15, num2: 3, operation: 'divide' };
        const result = await calculateNumbers(body);
        expect(result).toEqual({ result: 5 });
    });

    it('should throw error for invalid operation', async () => {
        const body = { num1: 5, num2: 3, operation: 'invalid' };
        await expect(calculateNumbers(body)).rejects.toEqual("Invalid operation. Please provide a valid operation.[add, subtract, multiply or divide]");
    });


    it('should throw error for division by zero', async () => {
        const body = { num1: 10, num2: 0, operation: 'divide' };
        await expect(calculateNumbers(body)).rejects.toEqual('Cannot divide by zero.');
    });

    it('should throw error for invalid input', async () => {
        const body = { num1: 'abc', num2: 3, operation: 'add' };
        await expect(calculateNumbers(body)).rejects.toEqual('Invalid input. Please provide valid numbers or operation.');
    });
});
