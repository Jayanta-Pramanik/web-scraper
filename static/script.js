async function search(){

    let query = document.getElementById("product").value;
    let cards = document.getElementById("cards");
    let loader = document.getElementById("loader");

    // clear old data
    cards.innerHTML = "";
    loader.style.display = "block";

    // fake loading delay (demo)
    setTimeout(() => {

        let data = [];

        // DEMO DATA (you can expand later)
        if(query.toLowerCase().includes("laptop")){
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
        else if(query.toLowerCase().includes("phone")){
            data = [
                {
                    title:"iPhone 13",
                    price:"₹70000",
                    rating:"4.6 ⭐",
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
                    title:"No results found 😢",
                    price:"",
                    rating:"",
                    img:"https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                }
            ];
        }

        // hide loader
        loader.style.display = "none";

        // show cards
        data.forEach(item => {

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

    }, 1200); // loading time
}