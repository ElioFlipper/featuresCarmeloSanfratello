class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(jsonstring) {
    let newObj = JSON.parse(jsonstring);
    return new Person(newObj.id, newObj.firstName, newObj.lastName, newObj.age)
  }

}

const jsonstring = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(jsonstring);
console.log(developer)