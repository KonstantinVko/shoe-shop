let clicks = 0;

function clickME() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById('clicks').style.display = 'inline-flex';
    document.getElementById("clicks1").innerHTML = clicks;
    document.getElementById('shopping-cart').style.display = 'block';
    document.getElementById('clicks1').style.display = 'inline-flex';
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