const LOREM_LIST = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit'
];

let counter = 0;

//for(; counter<10; counter++){
//    if(counter===5){break}
//    console.log(counter)
//}


for (; counter < 10; counter++) {
    if (counter === 5) { continue }
    console.log(counter)
}

const UL_DOM = document.querySelector('#userList')
let index = 0;
for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") { break }
    UL_DOM.innerHTML += `<li>${LOREM_LIST[index]}</li>`
}