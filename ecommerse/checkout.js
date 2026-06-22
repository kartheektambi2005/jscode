const productDetails = document.getElementById("productDetails");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function fetchProduct(){

  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

  const product = await response.json();

  productDetails.innerHTML = `

    <div class="product-detail">

      <img src="${product.image}">

      <div>

        <h1>${product.title}</h1>

        <p class="price">$${product.price}</p>

        <p>${product.description}</p>

        <button onclick='addToCart(${JSON.stringify(product)})'>
          Add To Cart
        </button>

      </div>

    </div>
  `;
}

fetchProduct();

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

  alert("Added To Cart");
}