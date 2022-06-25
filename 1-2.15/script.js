// 1
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// 2
function min(a, b) {
    return a < b ? a : b;
}

// 3

function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
      res *= x;
    }
    return res;
}
  
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
alert('Степень должна быть больше 1');
} else {
alert( pow(x, n) );
}