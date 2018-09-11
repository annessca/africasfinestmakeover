var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function curr(n) {
    showSlides(slideIndex = n);
}

function autoSlides(x) {
    showSlides(slideIndex += x)
 }
 
 function wrapSlider(n) {
     autoSlides(1);
 }
 
 function autoChange() {
     window.setInterval("wrapSlider()", 5000);
 }
 autoChange();
 


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("circle");
        
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n > slides.length) {
        slideIndex = 1
    }
    else if (n < 1) {
        slideIndex = slides.length
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
