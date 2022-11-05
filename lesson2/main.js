
// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')
// console.log('7')




// setTimeout(() => {
//     console.log("fdf")
// },1000)
//



// let block = document.querySelector('.block')
//
// console.log(block)
//
//
//
// let position =0;
// let topPosition = 0;
//
// function move(){
//     if (position <= 328){
//         position+= 16
//         block.style.left = `${position}px`
//         setTimeout(move,500)
//
//     }else if(position >= 460 && topPosition <= 400){
//         topPosition += 16;
//         block.style.top = `${topPosition}px`
//         setTimeout(move,500)
//     }
//
//
// }
//
// move()


// const init = () => {
//     let name = 'Syimyk'
//     function getName(){
//         console.log(name)
//     }
//     getName()
// }
// init()



// const getNum = (num) => {
//     console.log(num)
//     function getMult(){
//         let sum = num**3
//         console.log(sum);
//     }
//     getMult()
//
// }
// getNum(12)
//
// const fc1 = (n) =>{
//     console.log(n)
//     return function(num) {
//         console.log(num*n)
//         return function (number){
//             return number +num+n
//         }
//
//     }
// }

// const addEven = fc1(12)
// const getToPow = fc1(3)
// addEven(12)
// getToPow(3)













// const arr = [1,3,3,7]  // [1,3,4,2]


// const splitNum =(arr,number) => {
//     return String(+arr.join("") + number).split('').map(num => +num)
// }
// console.log(splitNum(arr,5));
/// ? [0,]


// const checkHEX = (str) => {
//     const regHex = /^#?[0-9A-F]{6}$/i
//     return regHex.test(str)
// }
// console.log(checkHEX("#f68E6e"));

// function getSome(a,b=6){
//     return a+b
// }

// getSome(1,7)

