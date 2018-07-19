
function addTwoDigits(n) {
    var nums = n.toString().split('');
    return nums.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
}
console.log(addTwoDigits(29));
