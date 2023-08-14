let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
};

//object icindeki bilgilerin tek seferde cikarilmasi
let {userName: user, password, isActive, ip:serverIp, serverName}=settings;
console.log(settings);
console.log(user,password,isActive,serverIp,serverName);

//obje icindeki bazi bilgilerin cikarilmasi (3 noktadan sonra kalan kismi bu yeni tanimlanan ogenin icinine aktariyor)
let {userName:userName2,password:password2,isActive:isActive2,...newSettings}=settings;
console.log(newSettings);

//objenin destructuring ile kopyalanmasi
//let settings2 = settings;
//settings2.userName="DegisenBilgi";
//console.log("settings2:", settings2);
//console.log("settings",settings);

//dogrusu
let settings2 = {...settings};
settings2.userName="DegisenBilgi2";
console.log("settings",settings);
console.log("settings2:", settings2);

let score = [100, 200, 300, 400];
let [score1,score2, ...otherScore]=score; //... koymazsak sadece 3. olani alir devamini almaz
console.log(score1,score2,otherScore);

//object kopyalama ile ayni 
let copyOfScore2=[...score];
console.log(copyOfScore2);

