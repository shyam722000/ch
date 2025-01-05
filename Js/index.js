
function navigateToProducts(name) {
    window.location.href = `productlist.html?category=${encodeURIComponent(name)}`;
}

function navigateToComponents(name) {
    window.location.href = `components.html?components=${encodeURIComponent(name)}`;
}