// The previous Gatsby build (gatsby-plugin-offline) registered a service worker
// at this path. Returning visitors still have it installed and would keep
// seeing the cached old site. This replacement takes over, deletes every
// cache, unregisters itself and reloads open tabs so they get the live site.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
