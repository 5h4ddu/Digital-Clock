let hrsEl = document.getElementById("hrs");
let minsEl = document.getElementById("min");
let secEl = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrsEl.innerHTML = (currentTime.getHours()<10? "0" : "") + currentTime.getHours();
  minsEl.innerHTML = (currentTime.getMinutes()<10? "0" : "") + currentTime.getMinutes();
  secEl.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();
}, 1000);
