// IMPORTANTE: Quando esegui la funzione setTimeout all'interno di una funzione
// Ci sarà bisogno di dare una funzione anonima prima perchè altrimenti farà
// partire immediatamente la funzione al suo interno, in questo caso la chiamiamo
// funzione wrapper

function printAsyncName ( callback, Curtis) {
   setTimeout (function() {callback()

    setTimeout(function() {console.log(Curtis)} ), 2000
}), 1000
}

function sayHi() {
    console.log("Hello")
}

printAsyncName(sayHi,"Curtis");