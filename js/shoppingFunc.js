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

purchaseItem(addItemCart, applyTaxToItems, buyItem, emptyItem);

function purchaseItem(...fns) {
  fns.reduce(compose);
}

function addItemCart(user, item) {
  const updateCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.03;
  const updateCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
  return user;
}

function emptyItem(user) {
  return user;
}
