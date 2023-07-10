let firtName = "Lorem";

function greetings(firtName = "", lastName = "") {
    console.log(`Merhaba ${firtName}`);
    console.log(`Merhaba ${lastName} ${lastName}`);
}

greetings();
greetings("Parametre");

function greetings2(firtName, lastName) {
    let info = `Merhaba ${firtName} ${lastName}`;
    return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDD</span>`

//domIdWriteInfo('greeting',greetings2("Ad","Soyad"));

domIdWriteInfo('greeting', htmlInfo);
domIdWriteInfo('info', greetings2("lorem", "Ipsum"));