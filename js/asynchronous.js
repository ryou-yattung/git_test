const promise = new Promise((resolve, reject) => {
  if (false) {
    reject("Error");
  } else {
    resolve("stuff worked");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "HIII2");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "HIII3");
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "HIII4");
});

Promise.all([promise, promise2, promise3, promise4, promise5]).then((values) => console.log(values));
