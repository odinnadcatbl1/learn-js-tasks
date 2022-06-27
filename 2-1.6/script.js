// 1
let div = document.querySelector('[data-widget-name]');

// 2
let links = document.querySelectorAll('a');
for (let link of links) {
    let href = link.getAttribute('href');
    if (!href.includes('://') || href.startsWith('http://internal.com')) {
        continue;
    }
    link.style.color = 'orange'
}