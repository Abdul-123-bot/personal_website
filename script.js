let slideIndex = 1;
showSlides(slideIndex);
showSlides1(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides1(n) {
    showSlides1(slideIndex += n);
  }
  
  
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide1(n) {
    showSlides1(slideIndex = n);
  }
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i+2 < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i+1].style.display = "none";  
    slides[i+2].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex].style.display = "block"; 
  slides[slideIndex+1].style.display = "block";   
}
function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("proj_slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i+2 < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i+1].style.display = "none";  
      slides[i+2].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex].style.display = "block"; 
    slides[slideIndex+1].style.display = "block";   
  }
  

