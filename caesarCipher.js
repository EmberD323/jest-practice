function caesarCipher(string,shiftFactor){
    const lowerAlphapet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperAlphapet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let stringLength = string.length;
    let cipherString="";

    for (let i=0; i<stringLength;i++){
        let character = string.charAt(i);
        //if character is punctuation or space return character
        if(isLetter(character)==false){
            cipherString += character;
        }
        else{
            //if uppercase use upper alphapet,else use lower
            let alphapet;
            if(checkCase(character) == true){
                alphapet = upperAlphapet;
            }
            else{
                alphapet = lowerAlphapet;
            }
            let alphapetIndex = alphapet.indexOf(character);
            
            //wrap alphapet if reached z
            if(alphapet[alphapetIndex+shiftFactor] == undefined){
            let undefinedAlphapetIndex = (alphapetIndex+shiftFactor)-26; 
            let newCharacter = alphapet[undefinedAlphapetIndex];
            cipherString += newCharacter;
            }
            else{
                let newCharacter = alphapet[alphapetIndex+shiftFactor];
                cipherString += newCharacter;
            }
        }
    }
    return cipherString

}

function checkCase(character){
    if (character == character.toUpperCase()) {
        return true;
    }
    if (character == character.toLowerCase()){
        return false;
    }
}
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
module.exports = caesarCipher;