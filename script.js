// let subscribe = false
// let loggedIn = true

// if (subscribe  === true){
//     console.log("Show the video")
// }
// else if(loggedIn === true){
//     console.log("tell user to upgrade their subscription")
// }
// else{
//     console.log("tell user to log into account")
// }

// let cash = 20
// let price = 40

// if (cash > price){
//     console.log(`You paid extra here is $${cash-price} change`)
    
// }
// else if ( cash == price){
//     console.log("have a nice day")
// }
// else{
//     console.log( `give me $${price-cash} more money`)
// }


// let cash = 50
// let price = 40
// let isStoreOpen = false
// if (cash >= price && isStoreOpen==true){
//     console.log('print the receipt')
//     // this will not print anything because && needs both true
//     // but in this case isStoreOpen does not equal flase 
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false
// if (cash >= price || isStoreOpen){
//     console.log('print the receipt')
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false
// if (""){
//     console.log("truthy Value")

// }
// else{
//     console.log("falsy Value")
// }
// // for if statement to run it needs truthy value 
// //for else statemnt to runit needs falsy value

// let hot = false
// hot ? console.log("weather is hot ") : console.log("weather is cold")

let cash = 50
let price = 40
let isStoreOpen = true

let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str)