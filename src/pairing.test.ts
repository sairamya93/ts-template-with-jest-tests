import { simplePigLatin } from "./pairing";

describe("Test for a single word" , () => {
    //Arrange
    const inputString='Hello';
    const expectedResult='elloHay';

    //Act
    const actualResult=simplePigLatin(inputString)

    //Assert
    test("Test whether the return string is elloHay for Hello",() => {
        expect(actualResult).toBe(expectedResult)
    })
});

describe("Test for multiple words in a string", () => {
//Arrange
const inputString="Pig latin is cool"
const expectedResult="igPay atinlay siay oolcay"
//Act
const actualResult=simplePigLatin(inputString)
//Assert
test("Test whether each word in the string is changed ", () => {
    expect(actualResult).toBe(expectedResult);
})
});


describe("Test for a string with punctuation marks", () => {
    //Arrange
    const inputString="Hello world !"
    const expectedResult="elloHay orldway !"
    
    //Act
    const actualResult=simplePigLatin(inputString)
    //Assert
    test("Test whether the return string is changed with the punctuation intact ", () => {
        expect(actualResult).toBe(expectedResult);
    })
});