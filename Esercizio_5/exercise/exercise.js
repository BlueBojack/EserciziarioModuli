const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  person2.firstName = "Simon"; 
  // Modify the property `firstName` of the `person2` in "Simon".

  //Perchè avendo scritto  const person2 = person1 essi risulteranno avere le stesse key con gli stessi valori e dovendo perforza fare il cambiamento dopo l'inizializzanzione della
  // const person2 inevitabilmente ci si ritrova ad avere il valere fristName in person1 cambiata
  console.log(person1);
  console.log(person2);