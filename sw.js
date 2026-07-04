/*  Lingel Invoice — minimal service worker.
    Its only job is to make the app installable ("Install" / "Add to
    Home screen" as a real app). It passes every request straight to
    the network, so it never serves stale/cached pages — you always
    get the latest version you pushed to GitHub.                      */
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* network passthrough */ return; });
