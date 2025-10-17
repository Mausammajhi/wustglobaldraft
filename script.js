// Sidebar toggle
const hamburger = document.createElement('button');
hamburger.className = 'hamburger';
hamburger.innerHTML = '&#9776;'; // ☰ icon
document.querySelector('.left').prepend(hamburger);

const menu = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Active link highlight
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    menuLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if (window.innerWidth <= 768) menu.classList.remove('show'); // auto close on mobile
  });
});
