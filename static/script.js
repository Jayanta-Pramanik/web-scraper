async function search(){
    let query = document.getElementById("product").value.toLowerCase();
    let loader = document.getElementById("loader");
    let cards = document.getElementById("cards");

    cards.innerHTML = "";
    loader.style.display = "block";

    setTimeout(()=>{
        loader.style.display = "none";

        let data = [];

        if(query.includes("laptop")){
            data = [
                {title:"HP Laptop", price:"₹45000", rating:"4.3⭐"},
                {title:"Dell Laptop", price:"₹52000", rating:"4.5⭐"}
            ];
        } 
        else if(query.includes("mobile")){
            data = [
                {title:"iPhone 13", price:"₹60000", rating:"4.7⭐"},
                {title:"Samsung Galaxy", price:"₹30000", rating:"4.4⭐"}
            ];
        } 
        else {
            data = [
                {title:"No results found", price:"", rating:""}
            ];
        }

        data.forEach(item=>{
            let card = `
            <div class="card">
                <h3>${item.title}</h3>
                <p class="price">${item.price}</p>
                <p class="rating">${item.rating}</p>
            </div>
            `;
            cards.innerHTML += card;
        });

    },1500);
}