function hello(name) {
    console.log(`Merhaba ${name}`);
}


hello("JavaScript");

const helloFuncV1 = (firstName) => {
    console.log(`Merhaba ${firstName}`);
}
helloFuncV1("helloFuncV1");

//arrow dan sonra tek bir islem yapilacaksa suslu paranteze gerek yok
const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`);
helloFuncV2("helloFuncV2"); //firstName tek degisken oldugu icin parantez kullanmaya da gerek yok

const helloFuncV3 = (firstName, lastName) =>
    console.log(`Merhaba ${firstName} ${lastName}`);
helloFuncV3("helloFuncV3", "Last Name info");

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`;
    console.log(info);
    return info;
}

helloFuncV4("helloFuncV4", "Other Info")


