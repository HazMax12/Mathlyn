// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Smooth scroll function for buttons
function scrollToSection(id){
  const section = document.getElementById(id);
  section.scrollIntoView({behavior:'smooth'});
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

