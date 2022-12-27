let btn = document.querySelector('.btn')
let list = document.querySelector('.todo-list')
let close = document.getElementsByClassName('trash')
let addlist = document.getElementsByTagName("li");
let active = document.getElementsByTagName('span')
let timetag = document.getElementsByTagName('p')
let time = document.querySelector('.time')
let todos = JSON.parse(localStorage.getItem('list'))
    ? JSON.parse(localStorage.getItem('list'))
    : []
create(todos)
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}
function times() {
    setInterval(() => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        m < 10 ? m = "0" + m : m
        s < 10 ? s = "0" + s : s
        h < 10 ? h = "0" + h : h
        time.innerHTML = `<span>${day}.</span><span>${month}.</span><span>${year} </span><span>${h}:</span><span>${m}:</span><span>${s}</span>`
    }, 1000);
}
times()
function todoTime() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    m < 10 ? m = "0" + m : m
    s < 10 ? s = "0" + s : s
    h < 10 ? h = "0" + h : h
    return `<span>${day}.</span><span>${month}.</span><span>${year}, </span><span>${h}:</span><span>${m}:</span><span>${s}</span>`
}
for (let i = 0; i < addlist.length; i++) {
    let img = document.createElement('img')
    img.className = 'trash'
    addlist[i].appendChild(img)
    document.querySelector('img').src = 'image/trash.png'
}

btn.addEventListener('click', function (e) {
    e.preventDefault()
    let input = document.querySelector('.input').value


    // let span = document.createElement('p')
    // let timeTodo = document.createElement('span')
    // timeTodo.classList.add('todoTime')
    // timeTodo.innerHTML = todoTime()
    // li.appendChild(span)
    // li.appendChild(timeTodo)
    // span.appendChild(inputvalue)
    if (input === '') {
        document.querySelector('p').innerHTML = 'Text kiriting!!!'
        document.querySelector('p').style = `
        animation: shake 150ms 2 linear;
        animation-iteration-count: infinite;
        `
    } else {
        document.querySelector('p').innerHTML = ''
        add(input)
    }
    document.querySelector('input').value = ''
    // let img = document.createElement('img')
    // img.className = 'trash'
    // img.src = 'image/trash.png'
    // li.appendChild(img)
    for (let i = 0; i < active.length; i++) {
        active[i].onclick = function () {
            active[i].classList.toggle('active')
        }
    }

})

function create(todos) {
    todos.forEach((item) => {
        let li = document.createElement('li')
        li.innerHTML = `
        <p>${item.text}</p>
        <span class="todoTime">${item.time}</span>
        <img src="image/trash.png" class="trash">
        `
        document.querySelector('.todo-list').appendChild(li);
    })
}

function add(input) {
    let itemTime = todoTime()
    todos.push({ text: input, time: itemTime })
    let li = document.createElement('li')
    li.innerHTML = `
        <p>${input}</p>
        <span class="todoTime">${itemTime}</span>
        <img src="image/trash.png" class="trash">
        `
    document.querySelector('.todo-list').appendChild(li);
    setTodos()
}
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}