function capitalize(string) {
    if(typeof string !== "string"){throw new Error("A string is required as input - only letters")}
    let capitalCharacter = string.charAt(0).toUpperCase()
    let nonCapital = string.slice(1).toLowerCase();
    let result = capitalCharacter.concat(nonCapital);

    return result
    //throw new Error('you are using the wrong JDK!');
  }
  module.exports = capitalize;

  