let shoppingCart = [];



function render() {
    document.getElementById("shopping-cart-header").innerHTML = Object.keys(shoppingCart).length;
    document.getElementById("fixed-shopping-cart").innerHTML = Object.keys(shoppingCart).length;
    if (Object.keys(shoppingCart).length > 0) {
        document.getElementById('shopping-cart-header').style.display = 'flex';
        document.getElementById('fixed-shopping-cart-body').style.display = 'flex';
        document.getElementById('fixed-shopping-cart').style.display = 'flex';
    }
    localStorage["storedCart"] = JSON.stringify(shoppingCart);
}

function addItem1() {
    let item = {
        'name': 'Parlament Oxfords',
        'price': '1026 руб.',
        'img':'../img/5de52d845565f8b6377fb90b32e73d64%201.jpg'
    }
    shoppingCart.push(item);
    render();
}

function addItem2() {
    let item = {
        'name': 'Loake Chester',
        'price': '760 руб.',
        'img':'../img/5de52d845565f8b6377fb90b32e73d64%201.jpg'
    }
    shoppingCart.push(item);
    render();
}

function addItem3() {
    let item = {
        'name': 'Berwick 303',
        'price': '700 руб.',
        'img':'../img/5de52d845565f8b6377fb90b32e73d64%201.jpg'
    }
    shoppingCart.push(item);
    render();
}

function addItem4() {
    let item = {
        'name': 'Berwick 5150',
        'price': '580 руб.',
        'img':'../img/5de52d845565f8b6377fb90b32e73d64%201.jpg'
    }
    shoppingCart.push(item);
    render();
}


// Get the modal
let modal = document.getElementById("loginModal");

// Get the button that opens the modal
let btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


$('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});


//Smooth scroll
document.querySelectorAll('a[href^="#top"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

