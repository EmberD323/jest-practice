function reverseString(string) {


    let stringLength = string.length;
    let backwardString = "";

    for (let i=0; i<stringLength;i++){
        let newString = string.charAt(stringLength-1-i);
        backwardString += newString;
        
    }
    return backwardString;
        
    
}
  module.exports = reverseString;
