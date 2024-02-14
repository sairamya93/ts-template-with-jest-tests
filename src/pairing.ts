export const simplePigLatin = function (inputString:string) : string {
const wordArray=inputString.split(" ");

const modifyArray=wordArray.map(word => {
    return /^[a-zA-Z]+$/.test(word) ? word.slice(1)+word.charAt(0)+'ay' : word
     
})
return modifyArray.join(" ")
}    
