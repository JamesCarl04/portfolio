const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});