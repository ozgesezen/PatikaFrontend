//Form Submit

let formDom = document.querySelector("#userForm");
formDom.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault(); //(default islemi engelledik)gondere her tikladigimizda sayfa yenilenmemesi icin kullanadik
    console.log("islem gerceklesti");
    let scoreInputDOM = document.querySelector('#score');
    console.log(scoreInputDOM.value);
    localStorage.setItem('score', scoreInputDOM.value);//formlarda bir parametre ya da method icermiyorsa default da get olarak gider ve bu yuzden name cok onemlidir
}