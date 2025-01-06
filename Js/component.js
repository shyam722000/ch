function displayProducts() {
       // Get category from URL query parameters
       const queryString = window.location.search;
       const urlParams = new URLSearchParams(queryString);
       const category = urlParams.get('category');
   
       console.log('Category from URL:', category);
       console.log('test')
   
       // Get the product list container
       const productListContainer = document.querySelector('.product-list');
       productListContainer.innerHTML = ''; // Clear existing content
   
   
       if (!category) {
           productListContainer.innerHTML = '<p>Please select a valid category.</p>';
           return;
       }
   
       // Filter products based on the category
       const filteredProducts = products.filter(product => product.category === category);
   
       // Display message if no products are found
       if (filteredProducts.length === 0) {
           productListContainer.innerHTML = '<p>No products found for this category.</p>';
           return;
       }
   
       // Display filtered products
       filteredProducts.forEach(product => {
           const productDiv = document.createElement('div');
           productDiv.className = 'product1';
   
           productDiv.innerHTML = `
               <div class="imageProduct1">
                   <img src="${product.img}" alt="${product.name}">
               </div>
               <div class="productContent">
                   <p>${product.name}</p>
                   <p class="Chassis">Chassis: ${product.Chassis}</p>
                   <p class="learn_more">
                       <a href="${product.url}" target="_blank">Learn More</a>
                   </p>
               </div>
               <div class="congigur" onclick="navigateToProducts('${product.name}')">
                   Configure Now
               </div>
           `;
           productListContainer.appendChild(productDiv);
       });
   }




   






document.addEventListener('DOMContentLoaded', displayProducts);


function navigateToProducts(name) {
    window.location.href = `productlist.html?category=${encodeURIComponent(name)}`;
}

function navigateToComponents(name) {
    window.location.href = `componentList.html?components=${encodeURIComponent(name)}`;
}
function navigateproductDetails(name) {
    window.location.href = `productdetailPage.html?name=${encodeURIComponent(name)}`;
}