let request = new XMLHttpRequest();
request.open('get', ' https://fakestoreapi.com/products', true);
request.send();
request.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        console.log(products)
        let Results = "";
        for (let item of products) {
            Results += `
        <div class="productContainer">
            <div class="img">  
                <p class="title" >${item.title}</p>
                <img src="${item.image}">
            </div>
            <div class="info">
                <p class="description">${item.description}</p>
                <h3 class="category">${item.category}</h3>
               <p><span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star"></span>
               <span class="fa fa-star"></span><br> <span class="rating">${item.rating.rate}</span></p>
                
                <p class="price">
                    <span>$</span>
                    <span>${item.price}</span>
                </p>
                <button>Buy Now</button>
                
            </div>
        </div>
        `
        }
        document.querySelector(".container").innerHTML = Results;
    }
}