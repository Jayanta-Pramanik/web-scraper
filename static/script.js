function search(){

let query = document.getElementById("product").value.toLowerCase();
let cards = document.getElementById("cards");
let loader = document.getElementById("loader");

cards.innerHTML = "";
loader.style.display = "block";

setTimeout(()=>{

let data = [];

if(query.includes("laptop")){
    data = [
        {
            title:"HP Laptop",
            price:"₹50000",
            rating:"4.3 ⭐",
            img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        },
        {
            title:"Dell Laptop",
            price:"₹55000",
            rating:"4.5 ⭐",
            img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        }
    ];
}

else if(query.includes("phone")){
    data = [
        {
            title:"iPhone",
            price:"₹70000",
            rating:"4.7 ⭐",
            img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            title:"Samsung Galaxy",
            price:"₹60000",
            rating:"4.4 ⭐",
            img:"https://images.unsplash.com/photo-1510557880182-3c1c1c1c1c1c"
        }
    ];
}

else{
    data = [
        {
            title:"No results found",
            price:"",
            rating:"",
            img:"https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        }
    ];
}

loader.style.display = "none";

data.forEach(item=>{

let card = `
<div class="card">
<img src="${item.img}">
<h3>${item.title}</h3>
<p class="price">${item.price}</p>
<p class="rating">${item.rating}</p>
</div>
`;

cards.innerHTML += card;

});

},1000);
}

// QUICK SEARCH
function quickSearch(item){
document.getElementById("product").value = item;
search();
}

// 🔥 3D EFFECT
document.addEventListener("mousemove", function(e){

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let rect = card.getBoundingClientRect();

let x = e.clientX - rect.left;
let y = e.clientY - rect.top;

let centerX = rect.width/2;
let centerY = rect.height/2;

let rotateX = -(y-centerY)/10;
let rotateY = (x-centerX)/10;

card.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;
});
});

document.addEventListener("mouseleave", ()=>{
document.querySelectorAll(".card").forEach(card=>{
card.style.transform="none";
});
});