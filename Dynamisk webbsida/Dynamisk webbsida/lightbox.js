

var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function scrollSlide(n) {
    showSlide(slideIndex += n)
}

function gotoSlide(n) {
    showSlide(slideIndex = n);
}
  
    /*both slides and previews lenghta are 3 */
function showSlide(n) {
    const slides = document.getElementsByClassName("slides");
    let modalPreviews = document.getElementsByClassName('slide-preview');
  
    /*if more than 3 go back to 1*/
    if (n > slides.length) {
      slideIndex = 1;
    };
    
    /*if less than 1 go to 3*/
    if (n < 1) {
      slideIndex = slides.length;
    };
    
    /*hides all the main slides*/
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    
    /*deactivates the preview slides*/
    for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active-slide', '');
    };
    
    /*shows the current slide, -1 because arrays start at 0 while slides start at 1*/
    slides[slideIndex - 1].style.display = 'block';

    /*shows the which preview is currently active*/
    modalPreviews[slideIndex - 1].className += ' active-slide';
}
