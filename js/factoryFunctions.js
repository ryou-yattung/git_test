//Constructor functions
//加this
//加大寫
function Elf(name, weapon) {
  console.log("this", this);
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return `attack with ${this.weapon}`;
};

const peter = new Elf("peter", "stone"); //一定要做new
console.log(peter.attack());
