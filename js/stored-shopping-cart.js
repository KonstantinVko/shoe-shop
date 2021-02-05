let storedShoppingCart = JSON.parse(localStorage["storedCart"]);
document.getElementById("shopping-cart-header").innerHTML = storedShoppingCart.length;
if (storedShoppingCart.length > 0) {
    document.getElementById('shopping-cart-header').style.display = 'flex';
}
let filtered = [];

if (storedShoppingCart.some(item => item.name === 'Parlament Oxfords')) {
    document.getElementById('shopping-cart-item-1').style.display = 'flex';
}
if (storedShoppingCart.some(item => item.name === 'Loake Chester')) {
    document.getElementById('shopping-cart-item-2').style.display = 'flex';
}
if (storedShoppingCart.some(item => item.name === 'Berwick 303')) {
    document.getElementById('shopping-cart-item-3').style.display = 'flex';
}
if (storedShoppingCart.some(item => item.name === 'Berwick 5150')) {
    document.getElementById('shopping-cart-item-4').style.display = 'flex';
}
function hide1() {
    document.getElementById('shopping-cart-item-1').style.display = 'none';
    storedShoppingCart = storedShoppingCart.filter(item => item !== 'Parlament Oxfords')
}
function hide2() {
    document.getElementById('shopping-cart-item-2').style.display = 'none';
}
function hide3() {
    document.getElementById('shopping-cart-item-3').style.display = 'none';
}
function hide4() {
    document.getElementById('shopping-cart-item-4').style.display = 'none';
}
