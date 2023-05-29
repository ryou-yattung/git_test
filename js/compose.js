const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiply3andAbsolute = compose(multiplyBy3, makePositive);

console.log(multiply3andAbsolute(-20));
