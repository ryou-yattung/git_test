function setArrOne() {
  const array = [1, 2, 3, 4];
  console.log(array);

  return () => {
    for (let i = 0; i < array.length; i++) {
      (function (closureI) {
        setTimeout(() => console.log("I am at index" + array[i]), 3000);
      })(i);
    }
  };
}

let aaa = setArrOne();
aaa();
aaa();
aaa();
aaa();
