// 1
function ucFirst(str) {
    if (!str) {
        return str; // обходим ошибку undefined
    } 
    return str[0].toUpperCase() + str.slice(1);
}

// 2
function checkSpam(str) {
    let res = str.toLowerCase();
  
    return res.includes('viagra') || res.includes('xxx');
}

// 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

// 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}