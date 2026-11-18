// Mobile nav
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

(function () {
  var M = window.MEDIA || { photos: [], videos: [] };

  function slot(text, path, wide) {
    var d = document.createElement('div');
    d.className = 'slot' + (wide ? ' wide' : '');
    var p = document.createElement('div');
    p.textContent = text;
    var c = document.createElement('code');
    c.textContent = path;
    p.appendChild(c);
    d.appendChild(p);
    return d;
  }

  // Hero video: only kept if the file actually loads
  var hv = document.querySelector('[data-hero-video]');
  if (hv && M.heroVideo) {
    hv.addEventListener('error', function () { hv.remove(); });
    hv.setAttribute('poster', M.heroPoster || '');
    hv.src = M.heroVideo;
    var p = hv.play && hv.play();
    if (p && p.catch) p.catch(function () {});
  }

  // Photos
  document.querySelectorAll('[data-photos]').forEach(function (box) {
    var limit = parseInt(box.getAttribute('data-photos'), 10) || M.photos.length;
    M.photos.slice(0, limit).forEach(function (ph) {
      var fig = document.createElement('figure');
      var img = new Image();
      img.alt = ph.cap || 'Mountain biking photo';
      img.loading = 'lazy';
      img.onload = function () {
        fig.textContent = '';
        fig.appendChild(img);
        if (ph.cap) {
          var fc = document.createElement('figcaption');
          fc.textContent = ph.cap;
          fig.appendChild(fc);
        }
      };
      img.onerror = function () {
        fig.textContent = '';
        fig.appendChild(slot('Your photo here', ph.src, false));
      };
      img.src = ph.src;
      fig.appendChild(slot('Loading', ph.src, false));
      box.appendChild(fig);
    });
  });

  // Videos
  document.querySelectorAll('[data-videos]').forEach(function (box) {
    var limit = parseInt(box.getAttribute('data-videos'), 10) || M.videos.length;
    M.videos.slice(0, limit).forEach(function (v) {
      var wrap = document.createElement('div');
      wrap.className = 'vid';
      function label() {
        if (!v.title) return;
        var t = document.createElement('div');
        t.className = 'vt';
        t.textContent = v.title;
        wrap.appendChild(t);
      }
      if (v.youtube) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Play ' + (v.title || 'video'));
        b.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + encodeURIComponent(v.youtube) + '/hqdefault.jpg)';
        b.addEventListener('click', function () {
          var f = document.createElement('iframe');
          f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.youtube) + '?autoplay=1&rel=0';
          f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          f.allowFullscreen = true;
          f.title = v.title || 'Video';
          wrap.textContent = '';
          wrap.appendChild(f);
        });
        wrap.appendChild(b);
        label();
      } else if (v.file) {
        var vid = document.createElement('video');
        vid.controls = true;
        vid.preload = 'metadata';
        vid.playsInline = true;
        vid.addEventListener('error', function () {
          wrap.textContent = '';
          wrap.appendChild(slot('Your video here', v.file, true));
        });
        vid.src = v.file;
        wrap.appendChild(vid);
        label();
      }
      box.appendChild(wrap);
    });
  });

  // Shot checklists (saved in this browser only)
  document.querySelectorAll('[data-checklist]').forEach(function (list) {
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
      if (counter) counter.textContent = done.length + ' / ' + boxes.length + ' in the can';
    }
    boxes.forEach(function (box) { box.addEventListener('change', update); });
    update();
  });
})();
