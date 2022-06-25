// 1
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
}

// 2
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); 
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
}

// 3 
let keys = Array.from(map.keys());