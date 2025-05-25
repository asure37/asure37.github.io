/*
File: js/scripts.js
Description: JavaScript for smooth scrolling on anchor links and mobile nav auto-close.
*/
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Auto-close mobile menu on link click
  const navCollapse = document.getElementById('navMenu');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      new bootstrap.Collapse(navCollapse).hide();
    });
  });