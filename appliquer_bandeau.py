"""
Remplace le bandeau (<header>...</header>) de TOUTES les pages .html du dossier
par le bandeau commun chargé depuis header.html.

Utilisation :
  1. Copier ce fichier dans le dossier du site (là où se trouvent animes.html, etc.)
  2. Ouvrir un terminal dans ce dossier et lancer :  python appliquer_bandeau.py
  3. Les originaux sont sauvegardés dans le dossier "sauvegarde_avant_bandeau".
"""
import re
import shutil
from pathlib import Path

DOSSIER = Path(__file__).parent
SAUVEGARDE = DOSSIER / "sauvegarde_avant_bandeau"
SAUVEGARDE.mkdir(exist_ok=True)

BLOC = """<div id="site-header"></div>
<script>
  fetch('header.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
      const page = location.pathname.split('/').pop() || 'accueil.html';
      document.querySelectorAll('#site-header-bar nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
      });
    });
</script>"""

# Premier <header ...> ... </header> de la page (l'ancien bandeau)
MOTIF_HEADER = re.compile(r"<header\b.*?</header>", re.DOTALL | re.IGNORECASE)

ignores = {"header.html"}
modifiees, deja_ok, sans_header = [], [], []

for fichier in sorted(DOSSIER.glob("*.html")):
    if fichier.name in ignores:
        continue

    texte = fichier.read_text(encoding="utf-8")

    if 'id="site-header"' in texte:
        deja_ok.append(fichier.name)
        continue

    if not MOTIF_HEADER.search(texte):
        sans_header.append(fichier.name)
        continue

    shutil.copy2(fichier, SAUVEGARDE / fichier.name)
    nouveau = MOTIF_HEADER.sub(BLOC, texte, count=1)
    fichier.write_text(nouveau, encoding="utf-8")
    modifiees.append(fichier.name)

print(f"\nModifiées ({len(modifiees)}) :")
for nom in modifiees:
    print("  -", nom)

print(f"\nDéjà à jour ({len(deja_ok)}) :")
for nom in deja_ok:
    print("  -", nom)

if sans_header:
    print(f"\nAUCUNE balise <header> trouvée, à traiter à la main ({len(sans_header)}) :")
    for nom in sans_header:
        print("  -", nom)
