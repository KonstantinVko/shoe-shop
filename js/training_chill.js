let shoppingCart = {};


function render() {
    document.getElementById("shopping-cart-header").innerHTML = Object.keys(shoppingCart).length;
    document.getElementById("fixed-shopping-cart").innerHTML = Object.keys(shoppingCart).length;
    if (Object.keys(shoppingCart).length > 0) {
        document.getElementById('shopping-cart-header').style.display = 'flex';
        document.getElementById('fixed-shopping-cart-body').style.display = 'flex';
        document.getElementById('fixed-shopping-cart').style.display = 'flex';
    }
}

function addItem1(){
    shoppingCart.item = 'Parlament Oxfords';
    render();
}

function addItem2(){
    shoppingCart.item = 'Loake Chester';
    render()
}
function addItem3(){
    shoppingCart.item = 'Berwick 303';
    render()
}
function addItem4(){
    shoppingCart.item = 'Berwick 5150';
    render()
}





// Get the modal
let modal = document.getElementById("loginModal");

// Get the button that opens the modal
let btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});


