const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const addToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { getCartFromLocalStorage, addToLocalStorage };
