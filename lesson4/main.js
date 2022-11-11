


// const obj = {
//     name: 'Syimyk',
//     age: 20
// }
// let key = 'age'
// let objStr = JSON.stringify(obj)
// console.log(objStr)
// let objParse= JSON.parse(objStr)
// console.log(objParse)




const btn = document.querySelector('#btn') // берем кнопку

btn.addEventListener("click",() => { // навешиваем событие на клик
  const request =  new XMLHttpRequest() /// создание запроса
    request.open('GET','data.json') // пишем метод и ссылку
    request.setRequestHeader('Content-Type','application/json') // передаем типа данных
    request.send() // отправка запроса

    request.addEventListener('load', ()  => { // слушаем событие load и только после загрузки будет срабатывать определенная функция
        // console.log(request.response) /// ответ от сервера или просто ответ
        const data = JSON.parse(request.response)   // переобразуем наш ответ в объект
        document.querySelector('#name').innerHTML = data.name ///  записываем ответ в DO
      document.querySelector("#age").innerHTML = data.age ////
    })
})




///// number string undefined null примитивы
// object



let num1 = 12
let num2 = 12
let num3 = num1
// console.log(num1 === num2)


const obj1 = {  // 40
    name: 'Syimyk'
}
    // адрес объекта
const obj2 = {...obj1}


obj2.name ='Sam'
// obj2.age  = 20



/// spread operators

// console.log({...obj2,lastName: 'mitalipov'})



// console.log(obj1,'obj1' )
// console.log(obj2 ,'obj2' )


let arr = [1,3,5,6]
let arr2 = [7,8,9,10]
let arr3 = [...arr,...arr2]  // spread operators



/// rest parameters


// const getParams = (...param2) => {
//     console.log(param2,'param2')
//
// }
// getParams(12,122,122,'Ss','sdfdfdf')





// console.log(arr3.concat(arr2))







// console.log(arr3)


//
// const obj2 = {  // 45
//     name: 'Syimyk'
// }
//
// console.log(obj1 == obj2)


