const products = [
    {
        id:1,
        name:"iPhone 15",
        price:80000,
        image:"https://picsum.photos/300?1"
    },
    {
        id:2,
        name:"Samsung S24",
        price:70000,
        image:"https://picsum.photos/300?2"
    },
    {
        id:3,
        name:"Read mi Note 13",
        price:25000,
        image:"https://picsum.photos/300?3"
    },
    {
        id:4,   
        name:"OnePlus 12",
        price:45000,
        image:"https://picsum.photos/300?4"
    },
    {
        id:5,
        name:"nova 11",
        price:8000,
        image:"https://picsum.photos/300?5"
    },
    {
        id:6,
        name:"Google Pixel 8",
        price:70000,
        image:"https://picsum.photos/300?6"
    },
    {
        id:7,
        name:"Realme GT",
        price:2000,
        image:"https://picsum.photos/300?7"
    },
    {
        id:8,
        name:"OnePlus 12",
        price:4000,
        image:"https://picsum.photos/300?8"
    }
];
  

// forEach: Log all product names
products.forEach((product) => {
    console.log(product.name);
});

// map: Get all prices
const prices = products.map((product) => product.price);
console.log(prices);

// filter: Find affordable products under 10,000
const affordable = products.filter((product) => product.price < 10000);
console.log(affordable);

// find: Get the first OnePlus 12
const onePlus = products.find((product) => product.name === "OnePlus 12");
console.log(onePlus);

// reduce: Total price of all products
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(total);