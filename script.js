function scrollToContact() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  // 1. Custom Magnetic Cursor Logic
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Scale cursor on hover
document.querySelectorAll('a, button, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// 2. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  // In a real app, you'd use a CSS class to animate this
});

// 3. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
}
