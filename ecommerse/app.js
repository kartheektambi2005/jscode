const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const cartCount = document.getElementById("cartCount");

let allProducts = [];

// Cart Count
function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.innerText = cart.length;
}

updateCartCount();

// Fetch Products
async function fetchProducts(){

  try{

    const response = await fetch("https://fakestoreapi.com/products");

    if(!response.ok){
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    allProducts = products;

    displayProducts(products);

    loadCategories(products);

  }
  catch(error){

    productsContainer.innerHTML = `
      <h2>Error loading products</h2>
    `;

    console.log(error);
  }
}

fetchProducts();

// Display Products
function displayProducts(products){

  productsContainer.innerHTML = products.map(product => {

    return `

      <div class="card">

        <img src="${product.image}">

        <h3>${product.title.slice(0,40)}</h3>

        <p class="price">$${product.price}</p>

        <p>${product.description.slice(0,80)}...</p>

        <button onclick="viewProduct(${product.id})">
          View Details
        </button>

        <button onclick='addToCart(${JSON.stringify(product)})'>
          Add To Cart
        </button>

      </div>

    `;

  }).join("");
}

// View Product
function viewProduct(id){
  window.location.href = `product.html?id=${id}`;
}

// Add To Cart
function addToCart(product){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.id === product.id);

  if(existingProduct){
    existingProduct.quantity += 1;
  }
  else{
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Product Added To Cart");
}

// Search Products
searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase();

  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// Categories
function loadCategories(products){

  const categories = [...new Set(products.map(p => p.category))];

  categories.forEach(category => {

    categoryFilter.innerHTML += `
      <option value="${category}">${category}</option>
    `;
  });
}

// Category Filter
categoryFilter.addEventListener("change", () => {

  const value = categoryFilter.value;

  if(value === "all"){
    displayProducts(allProducts);
  }
  else{

    const filtered = allProducts.filter(product =>
      product.category === value
    );

    displayProducts(filtered);
  }
});

// Sorting
sortSelect.addEventListener("change", () => {

  let sortedProducts = [...allProducts];

  if(sortSelect.value === "low-high"){
    sortedProducts.sort((a,b) => a.price - b.price);
  }

  if(sortSelect.value === "high-low"){
    sortedProducts.sort((a,b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
});