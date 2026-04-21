async function search(){
    let query = document.getElementById("product").value;
    let loader = document.getElementById("loader");
    let cards = document.getElementById("cards");

    cards.innerHTML = "";
    loader.style.display = "block";

    try{
        let response = await fetch(`http://127.0.0.1:5000/search?query=${query}`);
        let data = await response.json();

        loader.style.display = "none";

        data.forEach(item=>{
            let card = `
            <div class="card">
                <h3>${item.title}</h3>
                <p class="price">₹${item.price}</p>
                <p class="rating">${item.rating}</p>
            </div>
            `;
            cards.innerHTML += card;
        });

    } catch(err){
        loader.style.display = "none";
        cards.innerHTML = "<p>Error loading data</p>";
    }
}