function search(){

let query = document.getElementById("product").value.toLowerCase();
let cards = document.getElementById("cards");
let loader = document.getElementById("loader");

cards.innerHTML = "";
loader.style.display = "block";

setTimeout(()=>{

let data = [
    {title:"HP Laptop", price:"₹50000", rating:"4.3 ⭐"},
    {title:"Dell Laptop", price:"₹55000", rating:"4.5 ⭐"}
];

loader.style.display = "none";

data.forEach(item=>{

if(item.title.toLowerCase().includes(query)){

let card = `
<div class="card">
<h3>${item.title}</h3>
<p class="price">${item.price}</p>
<p class="rating">${item.rating}</p>
</div>
`;

cards.innerHTML += card;

}

});

if(cards.innerHTML === ""){
cards.innerHTML = "<p>No results found</p>";
}

},1000);
}