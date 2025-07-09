const products = [
  { id: 1, name: "Shoes", price: 1200 },
  { id: 2, name: "T-shirt", price: 500 },
  { id: 3, name: "Bag", price: 900 }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  const cartDiv = document.getElementById("cart");
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  cartDiv.classList.toggle("hidden");
}

function checkout() {
  alert("Thank you for shopping with Tailcart!");
  cart = [];
  document.getElementById("cart-count").innerText = 0;
  document.getElementById("cart").classList.add("hidden");
}

renderProducts();
