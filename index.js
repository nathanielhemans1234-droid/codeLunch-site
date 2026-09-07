
(function() {
  'use strict';

  // ----- 1. Mobile nav toggle -----
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    // Add click event listener to toggle button
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      console.log('Menu toggled'); 
    });

    // Close nav when a link is clicked (better UX)
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });

    // Close nav when clicking outside (optional)
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ----- 2. Testimonial carousel -----
  var slides = document.querySelectorAll('.testimonial-slide');
  var currentIndex = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(function(s, i) {
      if (i === index) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  var prevBtn = document.getElementById('prevTestimonial');
  var nextBtn = document.getElementById('nextTestimonial');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });
  }

  // ----- 4. Smooth anchor scroll (optional) -----
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();