window.onscroll = function() {
    scrollFunction();
};

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
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('messageText').value;
    var messageContainer = document.getElementById('message');

    // Validasi sederhana
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      showMessage('error', 'Please fill in all fields.');
      return;
    }

    // Kirim data feedback ke server (simulasi)
    // Di sini, biasanya, Anda akan menggunakan AJAX atau API untuk mengirim data ke server
    // Dalam contoh ini, hanya menampilkan pesan feedback
    var feedbackMessage = `Thank you, ${name}! Your feedback has been received.`;
    showMessage('success', feedbackMessage);
  }

  function showMessage(type, text) {
    var messageContainer = document.getElementById('message');
    messageContainer.textContent = text;
    messageContainer.className = type;
    messageContainer.style.display = 'block';
  }
