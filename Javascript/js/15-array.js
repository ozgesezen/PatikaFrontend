//array olusturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = [];

//array icerisindeki eleman sayisini ogrenmek
console.log(items.length);

//array icindeki ilk elemanin cagrilmasi
console.log(items[0]);

//array icindeki son elemanin cagrilmasi
console.log(items[items.length - 1]);

//arrayin ortasindaki elemani alma
console.log(items[Math.floor(items.length / 2)]);

//degisken icindeki bilginin array olup olmadigini kontrol etmek
console.log(Array.isArray(items));