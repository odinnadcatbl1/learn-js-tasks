// 1
function sum(a) {
    return function(b) {
      return a + b; 
    };
}

// 2
// 2.1 inBetween
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
}
// 2.2 inArray
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}

// 3 -- подсмотрел
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}