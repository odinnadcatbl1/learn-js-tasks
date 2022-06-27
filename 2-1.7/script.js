// 1 - очищаем присвоением пустого значения;
function clear(elem) {
    elem.innerHTML = '';
}

// 2
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите текст", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

// 3 
let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },

    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};
let container = document.getElementById('container');

// 3.1 - подсмотрел
function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { 
    let li = '';
    let ul;
    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(container, data);

// 3.2 - подсмотрел 
function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет дочерних элементов, то вызов возвращает undefined
    // и элемент <ul> не будет создан
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
      let li = document.createElement('li');
      li.innerHTML = key;

      let childrenUl = createTreeDom(obj[key]);
      if (childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }

    return ul;
}

// 4
let lis = document.getElementsByTagName('li');

for (let li of lis) {
  let liCount = li.getElementsByTagName('li').length;
  if (!liCount) continue;
  li.firstChild.data += ' [' + liCount + ']';
}

// 5 - календарь

function createCalendar(elem, year, month) {

    let d = new Date(year, month - 1);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    // пустые ячейки в самом начале
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() ==  month - 1) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // пустые ячейки в конце таблицы
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

// 6 - часы - clock.js + index.html

// 7 -- подсмотрел
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);