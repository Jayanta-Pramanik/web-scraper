function search(){

    let query = document.getElementById("product").value.toLowerCase();
    let cards = document.getElementById("cards");
    let loader = document.getElementById("loader");

    cards.innerHTML = "";

    if(query === ""){
        loader.style.display = "none";
        return;
    }

    loader.style.display = "block";

    setTimeout(()=>{

        let data = [];

        if(query.includes("laptop")){
            data = [
                {title:"HP Laptop", price:"₹50000", rating:"4.3 ⭐"},
                {title:"Dell Laptop", price:"₹55000", rating:"4.5 ⭐"}
            ];
        }

        else if(query.includes("phone")){
            data = [
                {title:"iPhone", price:"₹70000", rating:"4.7 ⭐"},
                {title:"Samsung Galaxy", price:"₹40000", rating:"4.4 ⭐"}
            ];
        }

        else if(query.includes("watch")){
            data = [
                {title:"Smart Watch", price:"₹2499", rating:"4.2 ⭐"}
            ];
        }

        else{
            data = [
                {title:"No results found", price:"", rating:""}
            ];
        }

        loader.style.display = "none";

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

    },800);
}