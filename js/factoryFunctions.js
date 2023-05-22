// const elf = {
//   name: "Orwell",
//   weapon: "bow",
//   attack() {
//     console.log("attack with " + this.weapon);
//   },
// };

// elf.attack();

// factory functions
const elfFunctions = {
  attack() {
    console.log("attack with " + this.weapon);
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const tony = createElf("tony", "stones");
tony.attack();
