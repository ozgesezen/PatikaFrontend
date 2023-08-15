//JSON dosyadan veri cekmek
fetch("data/settings.json").then(
    Response => Response.json()
).then(responseJson => {
    console.log(responseJson);
    console.log(responseJson.userName);
});

let userListDOM = document.querySelector("#userList");

//API uzerinden veri cekme
fetch("https://jsonplaceholder.typicode.com/posts").then(
    Response => Response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = item.title;
        userListDOM.appendChild(liDOM);
    })
})