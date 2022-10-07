// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
function calculateTotal(items) {
  return items.reduce((a, b) => {
    return a + b.price;
  }, 0);
}

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  return (
    items.reduce((a, b) => {
      return a + b.price;
    }, 0) / items.length
  );
}

export { calculateTotal, calculateAvg };
