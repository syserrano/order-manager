//Inventory array
let inventory = [
  {sku: "SKU01", name: "Microphone", price: 100, stock: 10},
  {sku: "SKU02", name: "Headphones", price: 250, stock: 5},
  {sku: "SKU03", name: "Keyboard", price: 80, stock: 20},  
  {sku: "SKU04", name: "Monitor", price: 300, stock: 8}
]

inventory.forEach(item => {
  console.log(`SKU: ${item.sku}| Name: ${item.name}| Price: $${item.price}| Stock: ${item.stock}`);
})

//New item added to inventory
inventory.push({sku: "SKU05", name: "Mouse", price: 50, stock: 15})

//Last item removed from inventory
removedProduct = inventory.pop()
console.log(`Removed Product: ${removedProduct.name}`)

//Inventory Changes
inventory[1].price = 150;
inventory[3].stock = 15;

//Order Array
let orders = [
    {orderId: "ORD001", items: [{sku: "SKU01", quantity: 2}, {sku: "SKU03", quantity: 1}]},
    {orderId: "ORD002", items: [{sku: "SKU02", quantity: 1}, {sku: "SKU04", quantity: 2}]}
]

//Function to process orders
//checks if enough stock exists for each sku
//If stock is sufficient, it reduces the stock by the ordered quantity and calculates total price
function processOrder(orders) {
  orders.forEach(order => {
    let totalPrice = 0;
    let canFulfill = true;
    order.items.forEach(item => {
      let product = inventory.find(p => p.sku === item.sku);
      if (product && product.stock >= item.quantity) {
        totalPrice += product.price * item.quantity;
        product.stock -= item.quantity;
      } else {
        canFulfill = false;
      }
    });
    console.log(`Order ${order.orderId} ${canFulfill ? "can be fulfilled" : "cannot be fulfilled"}. Total Price: $${totalPrice}`);
  });
};

//Used .reduce to calculate total inventory value accross all products
let totalInventoryValue = inventory.reduce((total, product) => {
  return total + (product.price * product.stock);
}, 0);
console.log(`Total Inventory Value: $${totalInventoryValue}`);

//Lists products with low stock
let lowStockProducts = inventory.filter(product => product.stock <= 5);
lowStockProducts.forEach(product => {
  console.log(`SKU: ${product.sku}, Name: ${product.name}, Stock: ${product.stock}`);
});

