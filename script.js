// Mobile nav toggle
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

// Shot checklists: remember ticks in this browser only (works without storage too)
(function () {
  var lists = document.querySelectorAll('[data-checklist]');
  lists.forEach(function (list) {
    var key = 'mtb-checklist-' + list.getAttribute('data-checklist');
    var boxes = list.querySelectorAll('input[type="checkbox"]');
    var counter = document.querySelector('[data-progress="' + list.getAttribute('data-checklist') + '"]');
    var saved = [];
    try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
    boxes.forEach(function (box, i) { if (saved.indexOf(i) !== -1) box.checked = true; });

    function update() {
      var done = [];
      boxes.forEach(function (box, i) { if (box.checked) done.push(i); });
      try { localStorage.setItem(key, JSON.stringify(done)); } catch (e) {}
      if (counter) counter.textContent = done.length + ' of ' + boxes.length + ' shots captured';
    }
    boxes.forEach(function (box) { box.addEventListener('change', update); });
    update();
  });
})();
