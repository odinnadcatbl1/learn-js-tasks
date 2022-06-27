// 1
for (let li of document.querySelectorAll('li')) {

    let title = li.firstChild.data;
    title = title.trim(); // удаляем лишние пробелы c конца строки
    let count = li.getElementsByTagName('li').length;
    console.log(title + ': ' + count);
}