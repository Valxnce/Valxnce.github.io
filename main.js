// Small UI helpers for the template
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile toggle
const toggle = document.getElementById('mobile-menu-toggle');
toggle && toggle.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Contact form basic client-side behavior (non-functional without backend)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! This demo sends no email — wire up a server or use a form provider (Formspree, Netlify Forms, Google Forms).');
    form.reset();
  });
}
