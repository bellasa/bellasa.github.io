$(window).on('load', function(){
  setTimeout(function(){
    $('#Preloader').fadeOut();
  }, 3000);
  
})

// particle bg home
particlesJS.load('Home-particles','asset/particles/home-particles.json');

// Typewriter 
const text = document.querySelector(".typewriter-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Desainer Grafis";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Network Support";
  }, 3000);
  
};
textLoad();
setInterval(textLoad, 4500);