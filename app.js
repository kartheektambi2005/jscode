// app.js

const productsContainer =
document.getElementById("productsContainer");

const cartCount =
document.getElementById("cartCount");

const cartBtn =
document.getElementById("cartBtn");

const cartPage =
document.getElementById("cartPage");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const sortSelect =
document.getElementById("sortSelect");

const modal =
document.getElementById("productModal");

const modalData =
document.getElementById("modalData");

const closeModal =
document.getElementById("closeModal");

let allProducts = [];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

/* FETCH PRODUCTS */

fetch("https://fakestoreapi.com/products")
.then((response) => {

  if(!response.ok){
    throw new Error("API Failed");
  }

  return response.json();

})

.then((products) => {

  allProducts = products;

  displayProducts(products);

  loadCategories(products);

})

.catch((error) => {

  productsContainer.innerHTML =
  `<h2>Error Loading Products</h2>`;

  console.log(error);

});

/* DISPLAY PRODUCTS */

function displayProducts(products){

  productsContainer.innerHTML =
  products.map((product) => {

    return `

    <div class="card">

      <img src="${product.image}" />

      <h3>${product.title.slice(0,40)}</h3>

      <p class="price">$${product.price}</p>

      <button onclick="viewDetails(${product.id})">
        View Details
      </button>

      <button onclick="addToCart(${product.id})">
        AddTo Cart
      </button>

    </div>

    `;

  }).join("");

}

/* VIEW DETAILS */

function viewDetails(id){

  const product =
  allProducts.find((item) => item.id === id);

  modal.classList.remove("hidden");

  modalData.innerHTML = `

    <img src="${product.image}" />

    <h2>${product.title}</h2>

    <p>${product.description}</p>

    <h3>$${product.price}</h3>

    <button onclick="addToCart(${product.id})">
      Add To Cart
    </button>

  `;
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});



function addToCart(id){

  const product =
  allProducts.find((item) => item.id === id);

  const existing =
  cart.find((item) => item.id === id);

  if(existing){

    existing.qty += 1;

  }else{

    cart.push({
      ...product,
      qty:1
    });

  }

  saveCart();

}

/* SAVE CART */

function saveCart(){

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  updateCartCount();

  renderCart();

}



function updateCartCount(){

  cartCount.innerText =
  cart.reduce((total,item) =>
    total + item.qty,0);

}



cartBtn.addEventListener("click", () => {

  cartPage.classList.remove("hidden");

  renderCart();

});



closeCart.addEventListener("click", () => {

  cartPage.classList.add("hidden");

});

/* RENDER CART */

function renderCart(){

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {

    total += item.price * item.qty;

    cartItems.innerHTML += `

    <div class="cart-item">

      <img src="${item.image}" />

      <div>

        <h4>${item.title.slice(0,25)}</h4>

        <p>$${item.price}</p>

        <div>

          <button class="qty-btn"
            onclick="changeQty(${item.id}, -1)">
            -
          </button>

          ${item.qty}

          <button class="qty-btn"
            onclick="changeQty(${item.id}, 1)">
            +
          </button>

        </div>

        <button class="remove-btn"
          onclick="removeItem(${item.id})">
          Remove
        </button>

      </div>

    </div>

    `;
  });

  totalPrice.innerText =
  `Total: $${total.toFixed(2)}`;

}

/* CHANGE QUANTITY */

function changeQty(id, value){

  const item =
  cart.find((product) => product.id === id);

  item.qty += value;

  if(item.qty <= 0){

    cart =
    cart.filter((product) =>
      product.id !== id);

  }

  saveCart();

}



function removeItem(id){

  cart =
  cart.filter((item) =>
    item.id !== id);

  saveCart();

}



searchInput.addEventListener("input", (e) => {

  const value =
  e.target.value.toLowerCase();

  const filtered =
  allProducts.filter((product) =>

    product.title.toLowerCase()
    .includes(value)

  );

  displayProducts(filtered);

});


function loadCategories(products){

  const categories =
  [...new Set(products.map((p) =>
    p.category
  ))];

  categories.forEach((category) => {

    categoryFilter.innerHTML += `

      <option value="${category}">
        ${category}
      </option>

    `;

  });

}

categoryFilter.addEventListener("change", (e) => {

  if(e.target.value === "all"){

    displayProducts(allProducts);

  }else{

    const filtered =
    allProducts.filter((product) =>

      product.category === e.target.value

    );

    displayProducts(filtered);

  }

});

/* SORTING */

sortSelect.addEventListener("change", (e) => {

  let sorted = [...allProducts];

  if(e.target.value === "low"){

    sorted.sort((a,b) =>
      a.price - b.price);

  }

  if(e.target.value === "high"){

    sorted.sort((a,b) =>
      b.price - a.price);

  }

  displayProducts(sorted);

});

/* CHECKOUT */

document.querySelector(".checkout-btn")
.addEventListener("click", () => {

  if(cart.length === 0){

    alert("Cart is Empty");

    return;

  }

  alert("Checkout Successful!");

  cart = [];

  saveCart();

});