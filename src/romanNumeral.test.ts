import { romanNumeral } from "./romanNumeral";

describe("Throw an error for an invalid input", () => {
    test("throws an error when input is a decimal number", () => {
        expect(() => {
            romanNumeral(2.3);
        }).toThrow("Input should be a integer");
    });
    test("throws an error when input is a number less than 1", () => {
        expect(() => {
            romanNumeral(0);
        }).toThrow("Input should be a positive number");
    });
});

describe("To check if the roman numeral equivalent is returned for a single digit number", () => {
    //Arrange
    const inputNumber=1
    const expectedValue='I'

    //Act
    const actualValue=romanNumeral(inputNumber)

    //Assert
    test("Check for a single digit number" , () => {
        expect(actualValue).toBe(expectedValue)
    })
});

describe("To check if the roman numeral equivalent is returned for a 2 digit number", () => {
    //Arrange
    const inputNumber=45
    const expectedValue='XLV'
    const actualValue=romanNumeral(inputNumber)
    test("Check for a 2 digit number" , () => {
        expect(actualValue).toBe(expectedValue)
    })
});

describe("To check if the roman numeral equivalent is returned for a 3 digit number", () => {
    //Arrange
    const inputNumber=358
    const expectedValue='CCCLVIII'
    const actualValue=romanNumeral(inputNumber)
    test("Check for a 3 digit number" , () => {
        expect(actualValue).toBe(expectedValue)
    })
});

describe("To check if the roman numeral equivalent is returned for a 4 digit number", () => {
    const inputNumber=1234
    const expectedValue='MCCXXXIV'
    const actualValue=romanNumeral(inputNumber)
    test("Check for a 4 digit number" , () => {
        expect(actualValue).toBe(expectedValue)
    })
});

describe("To check if a message is given to enter values upto 3000", () => {
    const inputNumber=3001
    const expectedValue='Enter a number less than or equal to 3000'
    const actualValue=romanNumeral(inputNumber)
    test("Check for a number greater than 3000" , () => {
        expect(actualValue).toBe(expectedValue)
    })
});
