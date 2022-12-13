const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + this.weapon;
  },
};

console.log(elf.attack());
