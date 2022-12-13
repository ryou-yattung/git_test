let dragon = {
  name: "ryou",
  fire: true,
  fight() {
    return 5;
  },

  sing() {
    return this.fire && `I am ${this.name},the breather of fire`;
  },
};
console.log(dragon.sing());

let lizard = {
  name: "kiki",
  fright() {
    return 1;
  },
};
const lingLizard = dragon.sing.bind(lizard); //dragonからsingを継ぐ
console.log(lingLizard()); //undefinded//fireできないから

lizard.__proto__ = dragon;
console.log(lizard.sing()); //dragonから全ての属性を継ぐ
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop); //name + fright//lizard的原有属性
  }
}

console.log(dragon.isPrototypeOf(lizard)); //dragonはlizardの原型
