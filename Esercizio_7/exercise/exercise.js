function printName() {

    let helloName = "Hello John"
    function inner() {

        return helloName
    }
    return inner
    
}

const prendiNome =printName();

 setTimeout(function() 
 {console.log(prendiNome()) }

 2000);

 //Non ho capito come fare