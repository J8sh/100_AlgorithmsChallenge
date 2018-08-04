function avoidObstacles(inputArray) {
    inputArray = inputArray.sort(function (a, b) { return a - b; });
    var largestArrayVal = inputArray[inputArray.length - 1];
    var _loop_1 = function (i) {
        if (inputArray.every(function (element) { return element % i !== 0; })) {
            return { value: i };
        }
    };
    for (var i = 1; i <= largestArrayVal + 1; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
