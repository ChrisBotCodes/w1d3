var cart = {
  items: [], //should contain an id and a price
  addItem: function(itemToAdd) {
    this.items.push(itemToAdd);
  },
  removeItem: function(itemIndex) {
    this.items.splice(itemIndex, 1);
  },
  calculateTotal: function() {
    total = 0;
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
};