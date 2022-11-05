// let nameOsUser = prompt('tell me your name')


/// const regexp = new RegExp('m','g')
// let regExp = /m/gi

 // console.log(nameOsUser.match(regExp))

/*
const phoneNum = document.querySelector('.phoneNum')
const phoneSubmit = document.querySelector('.phoneSubmit')
const result = document.querySelector('#result')
console.log(phoneNum)
*/


// let regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


// let regExp = /\w/gi
// console.log(nameOsUser.match(regExp))



// console.log(nameOsUser.replace(regExp,'*'))

///  phoneNum.match(reqExp) // используетя для строк
/// regExp.test() // делает тест у самого выражение


// phoneSubmit.addEventListener('click',() => {
//     if(regExp.test(phoneNum.value)){
//         result.innerText = 'Success'
//         result.style.color = 'green'
//     }else{
//         result.innerText = 'false'
//         result.style.color = 'red'
//     }
// })
//
//



/// recursion1



// for (let i =0; i < 10;i++) {
//
// }



// let i  = 0;
// function addNum() {
//     i++
//     console.log(i)
//     if (i > 30) return
//     addNum()
// }
//
// addNum()
//



// let i = 0;
// let field = ''
//
// function addStr() {
//     i++
//     field += `${i} `
//     if (i > 50) return
//     addStr()
// }
//
// addStr()
//
//
const obj = {
    Jonh: {
        age: {
            one: 1,
            two: 2,
            age: {
                1: '2',
                2: '3'
            }

        },
        parents: {
            "Ketty": {
                age: 34,
                parents: {
                    'Dfdfd': {
                        age:65
                    },
                    'Jodfd': {age:70}
                }
            },
            "Alex": {
                age: 12
            }

        }
    },
    'Sam': {
        age: 15,
        parents: {
            "Felix": {
                age: 40
            },
            "Marry": {
                age:  38

            }

        }

    }
}



const peronList = (obj) => {
    for (let key in obj.parents){
        console.log(key)
        peronList(obj.parents[key])
    }
}
for(let key in obj){
    peronList(obj[key])
}












