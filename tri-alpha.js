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
