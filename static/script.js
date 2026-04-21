function search(){

    let query = document.getElementById("product").value.toLowerCase();
    let cards = document.getElementById("cards");

    cards.innerHTML = "";

    let data = [];

    if(query.includes("phone")){
        data = [
            {
                title:"iPhone",
                price:"₹70000",
                rating:"4.7 ⭐",
                img:"static/images/iphone.jpg"
            },
            {
                title:"Samsung Galaxy",
                price:"₹60000",
                rating:"4.4 ⭐",
                img:"static/images/samsung.jpg"
            }
        ];
    }

    else if(query.includes("laptop")){
        data = [
            {
                title:"HP Laptop",
                price:"₹50000",
                rating:"4.3 ⭐",
                img:"static/images/laptop.jpg"
            },
            {
                title:"Dell Laptop",
                price:"₹55000",
                rating:"4.5 ⭐",
                img:"static/images/laptop2.jpg"
            }
        ];
    }

    else{
        data = [
            {title:"No results found", price:"", rating:"", img:""}
        ];
    }

    data.forEach(item => {

        let card = `
        <div class="card">
            ${item.img ? `<img src="${item.img}">` : ""}
            <h3>${item.title}</h3>
            <p class="price">${item.price}</p>
            <p class="rating">${item.rating}</p>
        </div>
        `;

        cards.innerHTML += card;
    });
}

function quickSearch(item){
    document.getElementById("product").value = item;
    search();
}