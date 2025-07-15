  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.icon-arrow-right');
  const prevBtn = document.querySelector('.icon-arrow-left');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  AOS.init();

  function toggleFabMenu() {
    const menu = document.querySelector('.custom-fab-menu');
    const toggleBtn = document.querySelector('.custom-fab-toggle');

    menu.classList.toggle('show');
    toggleBtn.classList.toggle('rotated');
  }

  document.querySelector('.search-popup form').addEventListener('submit', function (e) {
    const input = document.querySelector('#search-form');
    if (input.value.trim() === '') {
      e.preventDefault();
      alert('Please type something to search, Janu!');
    }
  });

  const params = new URLSearchParams(window.location.search);
  const query = params.get("s");
  
  if (query) {
    document.getElementById("search-term").innerText = query;
  }

    document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('#navmenu');

    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('navmenu-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  });