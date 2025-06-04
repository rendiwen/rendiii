window.onscroll = function() {
    scrollFunction();
};

var currentLocation = location.href;
var menuItems = document.querySelectorAll('rendi navbar a')
for (var i = 0; i < menuItems.length; i++)
if (menuItems[i].href == currentLocation) {
    menuItems[i].classList.add(active);
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("rendi_navbar").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        document.getElementById("rendi_dropdown").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        document.getElementById("rendi_navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("rendi_dropdown").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    
}



// slideshow otomatis

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); // Ganti angka ini (ms) untuk mengatur waktu pergeseran gambar
}
