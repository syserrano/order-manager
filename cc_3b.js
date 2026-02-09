let inventory = [
  {sku: "SKU01", name: "Microphone", price: 100, stock: 10},
  {sku: "SKU02", name: "Headphones", price: 250, stock: 5},
  {sku: "SKU03", name: "Keyboard", price: 80, stock: 20},  
  {sku: "SKU04", name: "Monitor", price: 300, stock: 8}
]

inventory.forEach(item => {
  console.log(`SKU: ${item.sku}| Name: ${item.name}| Price: $${item.price}| Stock: ${item.stock}`);
})