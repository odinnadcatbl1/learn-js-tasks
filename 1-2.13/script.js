// 1
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// 2
let num;

do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num);

// 3

const primeNumbers = (x) => {
    let flag = true;
    for (let i = 2; i < x; i++) {
        if (x%i == 0) {
            flag = false;
            break
        }
    }

    switch (flag) {
        case(true):
            console.log('Простое');
            break;
        case(false):
            console.log('Непростое');
            break;
    }
};

primeNumbers(10); // Непростое