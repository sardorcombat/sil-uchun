/* Singapore International Lyceum — main.js
   Mobil menyu, sarlavhada faol sahifani belgilash va forma. */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Mobil menyu (burger) --- */
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  /* --- Joriy sahifani menyuda faollashtirish --- */
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* --- Yil (footer copyright) --- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* --- Aloqa formasi (namuna — hozircha faqat xabar chiqaradi) ---
     Haqiqiy yuborish uchun pastdagi izohga qarang (TAHRIRLASH.md). */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-result');
      if (note) {
        note.textContent = (window.silT ? window.silT('form.success') : 'Rahmat! Murojaatingiz qabul qilindi.');
        note.style.color = '#1a8a3a';
      }
      form.reset();
    });
  }

  /* --- Scroll paytida yengil paydo bo'lish animatsiyasi --- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.style.opacity = 1; en.target.style.transform = 'none'; io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card, .level, .post, .member, .price, .step, .info-card').forEach(function (el) {
      el.style.opacity = 0; el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      io.observe(el);
    });
  }

});
