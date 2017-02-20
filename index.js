const app = "I don't do much."
function getTotalAmountForProducts(products, callback) {
  let totalPrice = 0;
 
  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });
 
  return totalPrice;
}
 
function callback(totalPrice, product) {
  if (product.discount >= .5) {
    return totalPrice + product.price;
  }
  return totalPrice;
}
 
console.log(getTotalAmountForProducts(products, callback)); // prints 25.5