let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", function () {
    console.log("Merhaba");
    console.log(this) //tiklanan ogeyi gosteriyor 
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
})

//mouseover fare ustune gidince istenen islemi yapiyor

let counter = 0;
let counterDom = document.querySelector("#counter");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

counterDom.innerHTML = counter;

increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);

function clickEvent() {
    if (this.id == "increase") {
        counterDom.innerHTML = counter += 1;
    } else {
        counterDom.innerHTML = counter -= 1;
    }
}





