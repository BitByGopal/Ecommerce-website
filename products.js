const products = [

{ id:1, name:"White T-Shirt", price:999, image:"images/product1.png", category:"clothing" },

{ id:2, name:"Black T-shirt", price:1499, image:"images/product2.png", category:"clothing" },

{ id:3, name:"Cream T-shirt", price:1999, image:"images/product3.png", category:"shoes" },

{ id:4, name:"Black T-Shirt", price:999, image:"images/product4.png", category:"clothing" },

{ id:5, name:"White T-Shirt", price:999, image:"images/product5.png", category:"clothing" },

{ id:6, name:"Black T-Shirt", price:999, image:"images/product6.png", category:"clothing" },

{ id:7, name:"Dark Blue T-Shirt", price:999, image:"images/product7.png", category:"clothing" },

{ id:8, name:"White T-Shirt", price:999, image:"images/product8.png", category:"clothing" },

{ id:9, name:"Red T-Shirt", price:999, image:"images/product9.png", category:"clothing" },

];


const productContainer = document.getElementById("productList");


function displayProducts(productArray){

productContainer.innerHTML="";

productArray.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">Add To Cart</button>

</div>

`;

});

}


displayProducts(products);


document.getElementById("searchBar").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=products.filter(product =>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});


document.getElementById("categoryFilter").addEventListener("change",function(){

let category=this.value;

if(category==="all"){

displayProducts(products);

}

else{

let filtered=products.filter(product =>
product.category===category
);

displayProducts(filtered);

}

});