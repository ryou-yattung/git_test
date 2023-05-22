let view;
function initialize() {
  let called = 0;
  // console.log(called);

  return () => {
    if (called > 0) {
      // console.log(called);
      return;
    } else {
      view = "💴";
      called++;
      // console.log(called);
    }
  };
}

initialize();
const runOne = initialize();
runOne();
runOne();
runOne();

const array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
  // setTimeout(function () {
  //   console.log(index);
  // }, 1000);
}
