let username = prompt("Kullanici Adiniz:");
let age = prompt("Yasiniz:");
let info = document.querySelector("#info")

if (username && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz";
} else if (!username) {
    info.innerHTML = "Kullanici adiniz yok";
} else if (age <= 18) {
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz";
}
