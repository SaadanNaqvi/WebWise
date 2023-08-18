//Hero
document.addEventListener('DOMContentLoaded', function () 
{
    let slideIndex = 0;
    showSlides();
  
    function showSlides() 
    {
      let slides = document.getElementsByClassName('slide');
  
      // Remove the 'active' class from all slides
      for (let i = 0; i < slides.length; i++) 
      {
        slides[i].classList.remove('active');
      }
  
      // Show the current slide
      slideIndex++;
      if (slideIndex > slides.length) 
      {
        slideIndex = 1;
      }
      slides[slideIndex - 1].classList.add('active');
  
      // Set the slideshow to change every 5 seconds (adjust the interval as needed)
      setTimeout(showSlides, 5000);
    }
});