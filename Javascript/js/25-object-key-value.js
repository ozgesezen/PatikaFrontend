let laptop1 = {
    brand: "Apple",
    model: "Macbook",
    "2kg": 2 //basinda rakam yazamiyoruz yazmak icin tirnak icine almamiz gerek

}

console.log(laptop1);

console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

//Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac";
console.log(laptop1);
laptop1["brand"] = "Mac1"
console.log(laptop1);

//yeni bilgi ekleme
laptop1.price = 1000;
console.log(laptop1);

//Anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

for (const key in keys) {
    console.log(key)
}

keys.forEach(item => {
    console.log(item)
    console.log(laptop1[item]);
})

//Deger bilgilerine ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1);

values.forEach(value => {
    console.log("value: ", value)
})
