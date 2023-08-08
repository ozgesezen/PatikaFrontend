task.addEventListener('submit', newElement);

function newElement(event) {
    let task = document.getElementById('task');
    console.log(task.value);
    if (task.value.trim()) {
        addItem(task.value);
        task.value = "";
        let ekleToast = document.getElementById('listeyeEkleme');
        ekleToast.classList.remove('hide');
        ekleToast.classList.add('show');
        setTimeout(function () {
            ekleToast.classList.remove('show');
            ekleToast.classList.add('hide');

        }, 4000);
        let idToast1 = document.getElementById('listeyeEkle');
        idToast1.addEventListener('click', function () {
            ekleToast.classList.remove('show');
            ekleToast.classList.add('hide');
        })
    } else {
        let toatsDom = document.getElementById('boseklenemez');
        toatsDom.classList.remove('hide');
        toatsDom.classList.add('show');
        setTimeout(function () {
            toatsDom.classList.remove('show');
            toatsDom.classList.add('hide');

        }, 4000);
        let idToast = document.getElementById('bosekle');
        idToast.addEventListener('click', function () {
            toatsDom.classList.remove('show');
            toatsDom.classList.add('hide');
        })

    }
    localStorage.setItem('task', task.value);
    localStorage.getItem('task');


}

let userListDOM = document.getElementById('list');
const addItem = (task) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = task;
    userListDOM.append(liDOM);


    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    liDOM.appendChild(span);

    span.onclick = function () {
        liDOM.remove();
        toggleDeleteButtun
    }
}




userListDOM.addEventListener('click', function (item) {
    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        toggleDeleteButtun();
    }
})

function toggleDeleteButtun() {
    let checkedList = document.querySelectorAll('.checked');
    if (checkedList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.querySelector("#deleteAll").onclick = () => {
    let elements = document.querySelectorAll('.checked');
    elements.forEach(function (item) {
        item.remove();
        toggleDeleteButtun()
    })
}

