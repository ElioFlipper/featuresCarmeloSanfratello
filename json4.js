// In this exercise we need to filter the properties of the object
// person in order to convert just the id and age values into JSON.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};

let personArr = Object.entries(person)
// console.log(personArr)
let filteredArr = personArr.filter((el) => typeof el[1] === "number")
// console.log(filteredArr)
let filteredObj = Object.fromEntries(filteredArr)
// console.log(filteredObj)
console.log(JSON.stringify(filteredObj))


