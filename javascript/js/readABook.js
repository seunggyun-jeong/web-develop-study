let now = new Date();
let firstDay = new Date("2021-09-01");

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;

passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector('#day').innerText = passedTime;