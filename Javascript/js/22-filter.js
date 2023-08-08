const products = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];
//5 harften daha buyuk olanlar

const new_products = products.filter(items => items.length > 5);
console.log(new_products);



const users = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ali Can", isActive: true },
    { fullName: "Veli Han", isActive: true },
    { fullName: "Canan Can", isActive: false },
]

//const active_users = users.filter(users => users.isActive==true);
const active_users = users.filter(users => users.isActive);
console.log(active_users);