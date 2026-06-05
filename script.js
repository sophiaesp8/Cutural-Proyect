const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-nav');
const backToTop = document.getElementById('back-to-top');
const thumbnails = document.querySelectorAll('.thumb');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  const showButton = window.scrollY > 400;
  backToTop.classList.toggle('visible', showButton);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbnails.forEach((button) => button.classList.remove('active'));
    thumb.classList.add('active');
  });
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please enter your name, email, and message before sending.';
      return;
    }

    const subject = encodeURIComponent(`Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hola@apanecaheritage.com?subject=${subject}&body=${body}`;
    formStatus.textContent = 'Your request is ready to send. Your email client should open shortly.';
  });
}

