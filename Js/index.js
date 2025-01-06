
function navigateToProducts(name) {
    window.location.href = `productlist.html?category=${encodeURIComponent(name)}`;
}

function navigateToComponents(name) {
    window.location.href = `componentList.html?components=${encodeURIComponent(name)}`;
}
function navigateproductDetails(name) {
    window.location.href = `productdetailPage.html?name=${encodeURIComponent(name)}`;
}