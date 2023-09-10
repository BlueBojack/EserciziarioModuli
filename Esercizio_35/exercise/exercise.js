function repeatHello (callback) {
    const intervalID = setInterval(() => callback(),1000)
    return intervalID
}


function sayHi () {
    console.log("Hello!")
}

let repeater = repeatHello(sayHi)

setTimeout( function() {
    clearInterval(repeater);
},5000)
//setTimeout( function () {repeatHello(sayHi)})

