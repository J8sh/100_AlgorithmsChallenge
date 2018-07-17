function add(param1, param2) {
    return param1 + param2; //a simple operator to add both param together
}

//The rest parameter (...) syntax allows us to represent an 
//indefinite number of arguments as an array.
function add2() {
    var param1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param1[_i] = arguments[_i];
    }
    var total = 0;

    //forEach() method executes a provided function once for each array element.
    param1.forEach(function (num) {
        total += num;
    });
    
    return total;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
