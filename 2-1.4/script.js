// 1. Таблица с `id="age-table"`:
let table = document.getElementById('age-table')

// 2. Все элементы label внутри этой таблицы:
table.getElementsByTagName('label')
// или
document.querySelectorAll('#age-table label')

// 3. Первый td в этой таблице (со словом «Age»):
table.rows[0].cells[0]
// или так:
table.getElementsByTagName('td')[0]

// 4. Форма с именем "search":
document.querySelector('form[name="search"]')

// 5. Первый input в этой форме:
form.querySelector('input');

// 6. Последний input в этой форме:
let inputs = form.querySelectorAll('input');
inputs[inputs.length-1];