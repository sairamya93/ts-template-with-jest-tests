export const romanNumeral = (inputNumber : number) : string => {
  
    if (!Number.isInteger(inputNumber)) throw new Error("Input should be a integer");
    if (inputNumber < 1) throw new Error("Input should be a positive number");
    
    if(inputNumber > 3000)
    return "Enter a number less than or equal to 3000"
    //Array of Arrays to hold the Roman letters
    const romanLetters : (number | string)[][] = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
        
        let romanValue=''
        //Loop through the array from the highest value to determine the possible Roman numeral equivalent
        romanLetters.forEach(romanLetter => { 
            const value : number=romanLetter[0] as number //Asserting the value to be a number
            while(inputNumber >= value)
            {
                romanValue+=romanLetter[1]
              inputNumber-=value
            }
        })             
        return romanValue
    }


