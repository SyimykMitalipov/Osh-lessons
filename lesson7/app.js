


const name = document.querySelector('.name')


const temp = document.querySelector('.temp')

const search = document.querySelector('.search')


const apiKey  = 'e417df62e04d3b1b111abeab19cea714'



// const promise = new Promise((resolve,reject) => {
//     /// send fdlkjfasd
//    const response =  setTimeout(()  => {
//         console.log('send request')
//     },1000)
//
//     resolve(response)
// })
// promise.then((response)  => {
//     console.log(response)
// })
const fetchWeather = () => {
    const cityName = document.querySelector('.cityName').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,{})
        .then(result => {
        return result.json()
    }).then((data) => {
        name.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp - 273) + '&deg' + 'C'
    })
        .catch((e) => {
            console.log("Ошибка")
        }).finally(() => {
        const cityName = document.querySelector('.cityName').value  = ''
    })
}

search.addEventListener('click',fetchWeather)



/// async await

const todos = document.querySelector('.todos');


const addTodo = (item) => {
    const todo =  document.createElement('div')
    todo.innerHTML = `
            <div>
            <h3>${item.id}</h3>
            <p class="red">${item.title}</p>
            </div>
        `
    todo.style = `
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items:center;
    border: 1px solid red;
`
    todos.append(todo)
}


/// DRY


async function getData() {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        const todoList = await result.json()
        todoList.forEach((item) => {
            addTodo(item)
        })
    }catch (e){
        console.log('Ошибка')
    }finally {
        console.log('finally')
    }
}
getData()







