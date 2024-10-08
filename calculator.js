const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a*b
};

const divide = function(a,b){
    if(a==0){return "cannot divide 0"}
    if(b==0){return "cannot divide by 0"}
    return a/b
}


module.exports = {
  add,
  subtract,
  divide,
  multiply
};
