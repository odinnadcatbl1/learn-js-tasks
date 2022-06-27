// 1
// (вся высота) минус (часть, прокрученная сверху) минус (видимая часть)
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2
// создадим элемент с прокруткой
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '100px';
div.style.height = '100px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

// 3
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';