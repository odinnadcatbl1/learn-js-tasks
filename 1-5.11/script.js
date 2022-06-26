// 1
let d = new Date(2012, 1, 20, 3, 12);
alert(d);

// 2
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
}

// 3
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
}

// 4
function getDateAgo(date, days) {
    let newDate = new Date(date);
  
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}

// 5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// 6
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
}

// 7
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
}

// 8 -- подсмотрел
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}