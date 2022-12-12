function setArrOne() {
  const array = [1, 2, 3, 4];
  console.log(array);

  return () => {
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => console.log("I am at index" + i), 3000);
    }
  };
}

let aaa = setArrOne();
aaa();
aaa();
aaa();
aaa();
