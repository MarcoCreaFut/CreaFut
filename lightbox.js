(function () {
  function init() {
    var style = document.createElement('style');
    style.textContent =
      '.cf-lightbox-overlay{' +
        'position:fixed;inset:0;z-index:9999;' +
        'background:rgba(0,0,0,.6);' +
        'display:none;align-items:center;justify-content:center;' +
        'padding:40px;cursor:zoom-out;' +
        'opacity:0;transition:opacity .25s ease;' +
      '}' +
      '.cf-lightbox-overlay.cf-open{display:flex;}' +
      '.cf-lightbox-overlay.cf-show{opacity:1;}' +
      '.cf-lightbox-overlay img{' +
        'max-width:90vw;max-height:90vh;' +
        'filter:drop-shadow(0 20px 50px rgba(0,0,0,.6));' +
        'cursor:zoom-out;' +
        'user-select:none;' +
      '}' +
      '.cf-lightbox-close{' +
        'position:fixed;top:20px;right:24px;' +
        'width:42px;height:42px;border-radius:50%;' +
        'border:1px solid rgba(202,161,71,.6);' +
        'background:rgba(0,0,0,.5);' +
        'color:#caa147;font-size:22px;line-height:1;' +
        'display:none;align-items:center;justify-content:center;' +
        'cursor:pointer;z-index:10000;' +
        'font-family:sans-serif;' +
      '}';
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.className = 'cf-lightbox-overlay';
    var img = document.createElement('img');
    overlay.appendChild(img);

    var closeBtn = document.createElement('div');
    closeBtn.className = 'cf-lightbox-close';
    closeBtn.innerHTML = '&times;';

    document.body.appendChild(overlay);
    document.body.appendChild(closeBtn);

    function openLightbox(src, alt) {
      img.src = src;
      img.alt = alt || '';
      overlay.classList.add('cf-open');
      closeBtn.style.display = 'flex';
      requestAnimationFrame(function () {
        overlay.classList.add('cf-show');
      });
      document.documentElement.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('cf-show');
      closeBtn.style.display = 'none';
      document.documentElement.style.overflow = '';
      setTimeout(function () {
        overlay.classList.remove('cf-open');
        img.src = '';
      }, 200);
    }

    document.addEventListener('click', function (e) {
      var target = e.target.closest('.frame img');
      if (target) {
        e.preventDefault();
        openLightbox(target.src, target.alt);
      }
    });

    overlay.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* CreaFut — range automatiquement les tuiles de chaque dossier par ordre alphabétique.
   S'applique à toutes les grilles <div class="shield-grid"> de la page.
   - L'ordre suit le texte affiché sous chaque tuile (accents et majuscules ignorés, chiffres en premier).
   - Pour une exception : ajouter data-tri="clé" sur la tuile (ex. data-tri="Parc FC" pour ranger « le Parc FC » à la lettre P).
   - Pour désactiver le tri sur une grille : ajouter data-tri="non" sur le <div class="shield-grid">. */
(function () {
  var collator = new Intl.Collator('fr', { sensitivity: 'base', numeric: true });

  function cle(tuile) {
    var forcee = tuile.getAttribute('data-tri');
    if (forcee) return forcee;
    var etiquette = tuile.querySelector('.label-box');
    return (etiquette ? etiquette.textContent : tuile.textContent).replace(/\s+/g, ' ').trim();
  }

  function trier(grille) {
    if (grille.getAttribute('data-tri') === 'non') return;
    var tuiles = Array.prototype.filter.call(grille.children, function (el) {
      return el.classList.contains('shield-tile');
    });
    if (tuiles.length < 2) return;
    tuiles.sort(function (a, b) { return collator.compare(cle(a), cle(b)); });
    tuiles.forEach(function (t) { grille.appendChild(t); });
  }

  function lancer() {
    Array.prototype.forEach.call(document.querySelectorAll('.shield-grid'), trier);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
  else lancer();
})();
