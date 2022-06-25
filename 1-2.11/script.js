// 1
if (age >= 14 && age <= 90) {}

// 2
if (age < 14 || age > 90) {}

// 3
let user = prompt("Кто там?", '');

if (user === 'Админ') {

  let password = prompt('Пароль?', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (user === '' || user === null) {
  alert('Отменено');
} else {
  alert("Я вас не знаю");
}