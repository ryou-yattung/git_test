const user = {
  name: "",
  active: true,
  cart: [],
  purchases: [],
};

const addItems = (item) => {
  user.cart.push(item);
  user.purchases.push((item += item * 0.3));
  user.cart.length = 0;
};
console.log(addItems(1145));
console.log(addItems(154));
console.log(user.purchases);
