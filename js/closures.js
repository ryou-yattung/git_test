function heavyDuty() {
  const bigArray = new Array(1000).fill("tony");
  console.log(bigArray);

  return (i) => {
    console.log(bigArray[i]);
  };
}

const startOne = heavyDuty();
startOne(4);
startOne(4);
startOne(4);

const makeNuclearBtn = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return console.log("aaa");
  };

  setInterval(passTime, 1000);
  return { launch: launch, totalPeaceTime: totalPeaceTime };
};

const ohno = makeNuclearBtn();

console.log(ohno.totalPeaceTime());
console.log(ohno.totalPeaceTime());
