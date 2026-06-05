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
