self.addEventListener('push', function(e) {
  var options = {
    body: 'Go watch new komi episode today!',
    icon: 'komi.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'Like', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'Close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Komi is here!', options)
  );
});