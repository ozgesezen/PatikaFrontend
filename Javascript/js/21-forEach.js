const products = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

products.forEach
    (product => {
        console.log(product);
    })

products.forEach((products, index, array) => array[index] = `${products.toUpperCase()}`)
console.log(products);

const userList = document.getElementById('userList');

products.forEach(items => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = items;
    userList.appendChild(liDOM)
})