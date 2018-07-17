
function add(param1: number, param2: number): number {
    return param1 + param2; //a simple operator to add both param together
}

//The rest parameter (...) syntax allows us to represent an 
//indefinite number of arguments as an array.
function add2(...param1: number[]): number {
    let total = 0;

    //forEach() method executes a provided function once for each array element.
    param1.forEach((num) => {
        total += num;
    });

    return total;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
