const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;

  const lanch = () => {
    timeWithoutDestruction = -1;
    return "boom!!!!";
  };

  setInterval(passTime, 100);

  return { lanch: lanch, totalPeaceTime: totalPeaceTime }; //呼叫以上2個fn
};

const gameStatue = makeNuclearButton();
console.log(gameStatue.totalPeaceTime());
console.log(gameStatue.totalPeaceTime());
console.log(gameStatue.totalPeaceTime());
console.log(gameStatue.totalPeaceTime());
console.log(gameStatue.lanch());
