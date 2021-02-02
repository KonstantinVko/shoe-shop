let clicks = 0;

function clickME() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById('clicks').style.display = 'inline-flex';
}
