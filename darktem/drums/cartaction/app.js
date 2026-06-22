const products = [
  {
    title: "Wireless Headphones",
    img: "https://picsum.photos/id/180/400/300",
    description: "Premium wireless headphones with noise cancellation.",
    price: 79.99
  },
  {
    title: "Smart Watch",
    img: "https://picsum.photos/id/201/400/300",
    description: "Track your fitness and notifications on the go.",
    price: 129.99
  },
  {
    title: "Laptop",
    img: "https://picsum.photos/id/0/400/300",
    description: "Powerful laptop for work, gaming, and creativity.",
    price: 899.99
  },
  {
    title: "DSLR Camera",
    img: "https://picsum.photos/id/250/400/300",
    description: "Capture stunning photos and videos with ease.",
    price: 649.99
  },
  {
    title: "Running Shoes",
    img: "https://picsum.photos/id/21/400/300",
    description: "Comfortable running shoes designed for performance.",
    price: 59.99
  },
  {
    title: "Coffee Mug",
    img: "https://picsum.photos/id/30/400/300",
    description: "Elegant ceramic mug for your favorite beverages.",
    price: 12.99
  },
  {
    title: "Gaming Keyboard",
    img: "https://picsum.photos/id/48/400/300",
    description: "Mechanical keyboard with RGB lighting effects.",
    price: 89.99
  },
  {
    title: "Backpack",
    img: "https://picsum.photos/id/1062/400/300",
    description: "Stylish backpack for school, work, and travel.",
    price: 39.99
  },
  {
    title: "Smartphone",
    img: "https://picsum.photos/id/119/400/300",
    description: "Latest smartphone with advanced camera features.",
    price: 699.99
  },
  {
    title: "Desk Lamp",
    img: "https://picsum.photos/id/26/400/300",
    description: "Modern LED desk lamp with adjustable brightness.",
    price: 24.99
  },
  {
    title: "Bluetooth Speaker",
    img: "https://picsum.photos/id/1080/400/300",
    description: "Portable speaker with crystal-clear sound quality.",
    price: 49.99
  },
  {
    title: "Office Chair",
    img: "https://picsum.photos/id/1076/400/300",
    description: "Ergonomic office chair for maximum comfort.",
    price: 149.99
  }
];

let cont = document.getElementById("container");

function datap(product){
    const cards = product.map(i => {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${i.img}" class="card-img-top" alt="${i.title}">
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">${i.description}</p>
                <p class="card-text">$${i.price}</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>`
    });
    cont.innerHTML = cards.join("");
}
datap(products)



function data() {
    let filter = document.getElementById("search").value;
    let searched = products.filter(i => {
        return i.title.toLowerCase().includes(filter.toLowerCase());
    });
    datap(searched);
}