// 1
function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
    .join(''); 
}

// 2
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
  
      if (value < a || value > b) {
        arr.splice(i, 1);
        i--;
      }
    }  
}

// 4
arr.sort((a, b) => b - a);

// 5
function copySorted(arr) {
    return arr.slice().sort();
}

// 6
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let splitStr = str.split(' '),
        a = +splitStr[0],
        op = splitStr[1],
        b = +splitStr[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

// 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);
console.log(arr); // [vasya, masha, petya]

// 8
let users = [ vasya, petya, masha ];
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

// 9
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// 10 - подсмотрел
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// 11 
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// 12
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}