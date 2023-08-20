 function printName() {

    let helloName = "Hello John"
    function inner() {

        return helloName
    }
    return inner
}

const prendiNome =printName();

console.log(prendiNome());