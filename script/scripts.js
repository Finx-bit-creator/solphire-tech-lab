// Smooth scrolling
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Enrollment Form
const enrollForm = document.getElementById('enrollForm');

if(enrollForm){
  enrollForm.addEventListener('submit', function(e){
    e.preventDefault();

    window.open(
      'https://wa.me/2348053366713?text=Hello%20Solphire%20Tech%20Lab%2C%20I%20want%20to%20enroll.',
      '_blank'
    );
  });
}


// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});