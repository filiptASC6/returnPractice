function someFunc(){
    return "Hello World";
    return 5;
    // once a function executes a return statement nothing else will print out "unreachable code"
    // thus 5 will not print out
}

result = someFunc ();

console.log (result);
//by default all javascript functions return a value
// if a value is not specified the function returns undefined

function addTwoNums(num1, num2){
    return num1 + num2;
}

const sum = addTwoNums(999, 54056);
console.log (sum);

function returnValuePrac() {
    return (1==0)
    //returns false, because 1 is not equal to 0
}
console.log(returnValuePrac());

