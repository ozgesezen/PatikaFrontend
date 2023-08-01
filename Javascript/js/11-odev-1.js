let userName = prompt("Kullanici adiniz: ");
let info = document.querySelector("#info");
let saat = document.querySelector("#saat");
let now = new Date();

info.innerHTML = `Merhaba, ${userName} Hos geldin!`
saat.innerHTML = now.getHours() + ":" + now.getMinutes() + "-" + now.getDay() + "/" + now.getMonth();