const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    console.log("attack with " + this.weapon);
  },
};

elf.attack();

// factory functions
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      console.log("attack with " + this.weapon);
    },
  };
}

const tony = createElf("tony", "stones");
tony.attack();
