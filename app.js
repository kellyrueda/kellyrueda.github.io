(function () {
  // header shadow + mobile menu
  var top = document.querySelector('.top');
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.menu-btn');
  function onScroll() { if (top) top.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // lightbox
  var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  if (!shots.length) return;
  var lb = document.querySelector('.lb');
  var img = lb.querySelector('img'), cap = lb.querySelector('.cap'), count = lb.querySelector('.count');
  var i = 0, lastFocus = null;
  function show(n) {
    i = (n + shots.length) % shots.length;
    var s = shots[i];
    img.src = s.dataset.full; img.alt = s.querySelector('img').alt;
    cap.textContent = s.dataset.cap || '';
    count.textContent = (i + 1) + ' / ' + shots.length;
    var nx = shots[(i + 1) % shots.length]; (new Image()).src = nx.dataset.full;
  }
  function open(n) { lastFocus = document.activeElement; show(n); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  shots.forEach(function (s, n) { s.querySelector('button').addEventListener('click', function () { open(n); }); });
  lb.querySelector('.x').addEventListener('click', close);
  lb.querySelector('.prev').addEventListener('click', function () { show(i - 1); });
  lb.querySelector('.nxt').addEventListener('click', function () { show(i + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(dx < 0 ? i + 1 : i - 1); x0 = null;
  });
})();
