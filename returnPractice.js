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