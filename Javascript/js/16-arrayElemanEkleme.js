let items = [10, 20, 30, 40,];
console.log("items - ilk hali : ", items);

//Array: sona eleman ekleme -> push
items.push(50);
console.log("items - son hali : ", items);

//Array: basa eleman ekleme -> unshift()
items.unshift(5);
console.log("items - son hali : ", items);

//Array: sonundan bir eleman cikarma ->pop
let lastItem = items.pop()//son elemani lastitem icerisine ekledik
console.log(lastItem, items);

//Array: en bastaki elemani cikarma ->shift
let firstItem = items.shift();
console.log(firstItem, items);

//Array icindeki bir ogenin bilgisinin degistirilmesi:
items[0] = 100;
console.log(items);

var sports = ['basketball', 'football', 'tennis'];
console.log(sports); // basketball, football, tennis
sports.splice(1, 0, 'baseball');
console.log(sports); // basketball, baseball, football, tennis
