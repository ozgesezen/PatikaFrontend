let users = ["Lorem", "Ipsum", "Dolor",];
let userList = document.getElementById("userList");

let index =0;

for(;index<users.length; index++){
    console.log(users[index]);
    userList.innerHTML += `<li>${users[index]}</li>`;
}

//alternatif

for(index=0; index<users.length; index++){
    const liDOM = document.createElement('li');
    liDOM.innerHTML= users[index];
    userList.appendChild(liDOM)
}