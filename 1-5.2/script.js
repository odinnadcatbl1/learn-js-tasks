// 1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

// 2
function readNumber() {
    let num;
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') {
        return null;
    }
    return +num;
}

// 3
function random(min, max) {
    return min + Math.random() * (max - min);
}

// 4
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}