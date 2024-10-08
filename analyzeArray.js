function analyzeArray(array){
    
    
    let sum = 0;
    for(let i=0;i<array.length;i++){
        let currentItem = array[i];
        sum += currentItem
    }
    let average = sum/array.length;

    let min= Math.min(...array);
    let max= Math.max(...array);
    let length= array.length;
    let object = {average,min,max,length}
    return object
}

module.exports = analyzeArray;