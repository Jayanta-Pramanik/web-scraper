async function search(){

    let query = document.getElementById("product").value.trim();
    let cards = document.getElementById("cards");
    let loader = document.getElementById("loader");

    // empty search check
    if(query === ""){
        cards.innerHTML = "<p>Please enter a product name</p>";
        return;
    }

    cards.innerHTML = "";
    loader.style.display = "block";

    try{

        // 🔥 CALL BACKEND API
        let res = await fetch(`http://127.0.0.1:5000/search?q=${query}`);
        let data = await res.json();

        loader.style.display = "none";

        // no data case
        if(!data || data.length === 0){
            cards.innerHTML = "<p>No results found</p>";
            return;
        }

        // show results
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

    } catch(error){

        loader.style.display = "none";
        cards.innerHTML = "<p>Server error 😢</p>";
        console.error(error);
    }
}


// 🔥 QUICK SEARCH BUTTON
function quickSearch(item){
    document.getElementById("product").value = item;
    search();
}