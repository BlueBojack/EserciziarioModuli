const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

/*class Person{
 
  constructor (id, firstName, lastName, age) {
    this.age = age
    this.id = id
    this.lastName = lastName
    this.firstName = firstName
  }

} 
Non sono riuscito a trovare un metodo adatto
*/



const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 } a