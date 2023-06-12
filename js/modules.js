const fightModule = (function () {
  const harry = "potter";
  const voldemort = "he who must not be named";

  function fight(char1, char2) {
    const attack1 = Math.floor(Math.random() * char1.length);
    const attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  console.log(fight(harry, voldemort));
  return { fight };
})();
