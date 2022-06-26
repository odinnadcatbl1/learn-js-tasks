// 1
// 1.1
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}

// 1.2
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

// 1.3 - самое быстрое
function sumTo(n) {
    return n * (n + 1) / 2;
}

// 2
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// 3
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

// 4
// 4.1 - циклом
function printList(list) {
    let tmp = list;
  
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }  
}
// 4.2 - рекурсией 
function printList(list) {
    console.log(list.value);
  
    if (list.next) {
      printList(list.next); 
    }
}

// 5
// 5.1 - циклом
function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
}
// 5.2 - рекурсией 
function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
}

