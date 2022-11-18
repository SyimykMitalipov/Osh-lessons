// Promise




// setTimeout(() => { ///// Callback Hell
//     console.log('cal1')
//     /// request
//     setTimeout(() => {
//         console.log('cal2')
//         setTimeout(() => {
//             console.log('cal2')
//             setTimeout(() => {
//                 console.log('cal2')
//                 setTimeout(() => {
//                     console.log('cal2')
//                     setTimeout(() => {
//                         console.log('cal2')
//                         setTimeout(() => {
//                             console.log('cal2')
//                             setTimeout(() => {
//                                 console.log('cal2')
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



/// Promise



const req = new Promise((resolve,reject) => {
    // Send request
    new XLMHttpRequest()
   const req = new XMLHttpRequest()
    req.open('GET','data.json')
    req.setRequestHeader("Content-Type",'application/json')
    req.send()
    req.addEventListener('load',() => {
        resolve(JSON.parse(req.response))

    })
    const product = {
       name: 'tovar',
        price: 1200
    }
    // console.log(data,'1')
    console.log('Данные загружаются')
        reject('Ошибка при запросе')
})


req.then((product) => {
    return new Promise((resolve,reject) => {
        product.idOrdered = true
        console.log(product,'2')
        resolve(product)
        reject("Ошибка при добавлении")
    })
}).then((product) => {
    product.category = 'agro'
    console.log(product)
}).catch((reason) => {
    console.log(reason)
}).finally(() => {
    console.log('request end')
})




req.catch((reason) => {
    console.log(reason)
})



const request1 = new Promise(url,(resolve,reject) => {
    form.append(messageBlock)
    messageBlock.textContent = message.loading
    const request = new XMLHttpRequest()
    request.open('POST',`${url}`)
    request.setRequestHeader('Content-Type','application/json')
    request.send()
    resolve(request.response)
})

//// fetch API application programming interface

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))