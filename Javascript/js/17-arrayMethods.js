let items = [1, 2, 3, 4, 5];

//Array icinde array
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

//array icine baska bir ekledigimizde eklenen array in lenght i sadece 1 artar
//onu bir butun olarak gorur elemanlarina bakmak icin items[0][0] gibi iki index kullanmak gerekir
items.unshift(femaleUsers);
items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length);
console.log(items[0][0]);

//Array icerisinden oge ayirmak -> splice(pos,item?)
let newItems = items.splice(2, 4);
console.log(newItems);

//array icindeki ogenin index bilgisini bulmak indexOf()
items.unshift("lorem");
items.push("ipsum");
console.log(items);
console.log(items.indexOf("ipsum"));

//array kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);
//bu sekilde yeni bir array olusturulmus olmuyor yapilan islemler diger array i de etkiliyor
copyItems.pop();
console.log(copyItems);
console.log(items);

copyItems = items.slice() // kopyalama yapti
copyItems.pop();
console.log("copyitems: ", copyItems);
console.log("items: ", items);

let es6Items = [...items] //es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers]; // birden fazla array yapisini birlestirmek

//array icindeki bilgileri string e cevirme -> toString ve join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

//istedigimiz index bilgisine oge eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length - 1, 0, "Melisa");
console.log(allUsers);
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

