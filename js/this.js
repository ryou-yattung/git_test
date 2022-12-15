//new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
  hi = function () {
    return "hi" + this.name;
  };
}

const person1 = new Person("Peter", 11);
console.log(person1);
