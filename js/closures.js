let view;
console.log(view);

function initialize() {
  let called = 0;

  return () => {
    if (called > 0) {
      return;
    } else {
      view = "wow";
      called++;
      console.log("view has been set!!");
    }
  };
}
const startOne = initialize();
startOne();
console.log(view);
