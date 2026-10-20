/* Service worker CreaFut
 * - Pages HTML : réseau d'abord (vous voyez toujours vos dernières mises à jour),
 *   copie en cache si pas de connexion.
 * - Images / CSS / JS / polices : cache d'abord, rafraîchi en arrière-plan.
 * Pour forcer la mise à jour chez tout le monde, changez simplement VERSION.
 */
const VERSION = "v1";
const CACHE = "creafut-" + VERSION;
const MAX_RUNTIME_ENTRIES = 400; // évite de saturer le téléphone (le site a des centaines d'images)

const PRECACHE = [
  "./",
  "index.html",
  "accueil.html",
  "style.css",
  "nav.js",
  "lightbox.js",
  "pwa.js",
  "manifest.json",
  "offline.html",
  "bienvenue-logo.webp",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // un fichier manquant ne doit pas faire échouer toute l'installation
      Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("creafut-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  const extra = keys.length - MAX_RUNTIME_ENTRIES;
  for (let i = 0; i < extra; i++) await cache.delete(keys[i]);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone()).then(() => trim(cache));
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    return cached || cache.match("offline.html");
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      // ok = réponse normale ; type "opaque" = image cross-origin (Cloudinary)
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone()).then(() => trim(cache));
      }
      return response;
    })
    .catch(() => cached);
  return cached || refresh;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;
  const allowedExternal =
    url.hostname === "res.cloudinary.com" ||
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com";

  // On laisse passer tout le reste (PayPal, Instagram, etc.) sans y toucher
  if (!sameOrigin && !allowedExternal) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});
