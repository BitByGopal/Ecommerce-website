function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products=[

{id:1,name:"Red T-Shirt",price:999},
{id:2,name:"Blue Jeans",price:1499},
{id:3,name:"Sneakers",price:1999},
{id:4,name:"White T-Shirt",price:999}

];

let product=products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Product added to cart");

}


function updateCartCount(){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let count=document.getElementById("cartCount");

if(count){

count.innerText=cart.length;

}

}

updateCartCount();