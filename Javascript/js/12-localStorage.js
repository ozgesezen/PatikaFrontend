//Local Stogare islemleri

let user = { userName: "ozgesezen", isActive: true }
console.log(user);
localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')//bilgiyi al
userInfo = JSON.parse(userInfo);
console.log(userInfo);
//complex yapilar localstorage de tutulabilir
