function adder(a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);

    var result = a + b;
    for (var i = min + 1; i < max; i++) {
        result += i;
    }

    return result;
}
console.log( adder(3, 5) );