const user = {
  name: "Tony",
  active: true,
  cart: [],
  purchases: [],
};

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

console.log();
purchaseItem(addItemCart, applyTaxToItems, buyItem, emptyItem)(user, { name: "laptop", price: 2000 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  return user;
}

function buyItem(user) {
  return user;
}

function emptyItem(user) {
  return user;
}
console.log(user.cart);
