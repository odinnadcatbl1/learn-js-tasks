// 1
// <div>
document.body.firstElementChild;
// <ul>
document.body.lastElementChild;
// 2ой <li>
document.body.lastElementChild.lastElementChild;

// 2
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}