function search(){

    let query = document.getElementById("product").value.toLowerCase();
    let cards = document.getElementById("cards");

    // clear old results
    cards.innerHTML = "";

    let data = [];

    // 🔥 DEMO DATA
    if(query.includes("phone")){
        data = [
            {
                title: "iPhone",
                price: "₹70000",
                rating: "4.7 ⭐",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            },
            {
                title: "Samsung Galaxy",
                price: "₹60000",
                rating: "4.4 ⭐",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            }
        ];
    }
    else if(query.includes("laptop")){
        data = [
            {
                title: "HP Laptop",
                price: "₹50000",
                rating: "4.3 ⭐",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            },
            {
                title: "Dell Laptop",
                price: "₹55000",
                rating: "4.5 ⭐",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            }
        ];
    }
    else{
        data = [
            {
                title: "No results found",
                price: "",
                rating: "",
                image: "https://via.placeholder.com/200"
            }
        ];
    }

    // 🔥 DISPLAY CARDS
    data.forEach(item => {

        let card = `
        <div class="card">
            <img src="${item.image}" style="width:100%; border-radius:10px;">
            <h3>${item.title}</h3>
            <p class="price">${item.price}</p>
            <p class="rating">${item.rating}</p>
        </div>
        `;

        cards.innerHTML += card;
    });
}