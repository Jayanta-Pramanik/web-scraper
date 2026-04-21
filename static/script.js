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
                {
                    title:"HP Laptop",
                    price:"₹50000",
                    rating:"4.3 ⭐",
                    img:"https://via.placeholder.com/200"
                },
                {
                    title:"Dell Laptop",
                    price:"₹55000",
                    rating:"4.5 ⭐",
                    img:"https://via.placeholder.com/200"
                }
            ];
        }

        else if(query.includes("phone")){
            data = [
                {
                    title:"iPhone",
                    price:"₹70000",
                    rating:"4.7 ⭐",
                    img:"https://via.placeholder.com/200"
                },
                {
                    title:"Samsung Galaxy",
                    price:"₹40000",
                    rating:"4.4 ⭐",
                    img:"https://via.placeholder.com/200"
                }
            ];
        }

        else{
            data = [
                {title:"No results found", price:"", rating:"", img:""}
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

    },800);
}