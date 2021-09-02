self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open('pwa-gastby-store')
  );
});

// without this event listener, the service worker can't not work.
self.addEventListener('fetch', fetchTrackerEvent => {
  // console.log(fetchTrackerEvent.request.url);
  // fetchTrackerEvent.respondWith(
  //   caches
  //     .match(fetchTrackerEvent.request)
  //     .then(response =>
  //       response || fetch(fetchTrackerEvent.request)
  //     ),
  // );
});