// let human = {
//   mortal: true,
// };

// let ryou = Object.create(human);
// ryou.age = 23;
// console.log(human.isPrototypeOf(ryou)); //ryou的原型是human

// Data.prototype.lastYear = () => {
//   return this.getFullYear() - 1;
// };

// new Date("1099-10-10").lastYear();

let arr = [1, 2, 3];
let arrPush = arr.map((num) => num + "map");
console.log(arrPush);
