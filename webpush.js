const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BFHeG_-cgzrK3xohv4poJ7z4tpX9oDROrj8Rj3fXCjpuuK8pKdNSmF5T2rKKEY0lammQ_2_f1t_NGyG0RqOuynk',
  privateKey: '-RMX3o_klK67WLgFA2vc6IURRwqxkUQzDkHyh4bWAEw'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cYHtWG0LKYc:APA91bEe0TCaGynEP502gKrXmslhNnn9kxSFKjwqU4tq5QYE4_DlDNPEHdz8J2AbytdiyTodQpYxTOfeROjKPx10lRgEZsgmDAglYTDVkF6M3aiwF9XuyWmhTLuWDbn84JU3fARuE2En","expirationTime":null,"keys":{"p256dh":"BAEQ-XVfxi0lxj4ah_-zZH_fgAaTm8e6dctgd7yDXlf00PhRaXeKn78vZBloVof65WtGiU9zmDfBlbFAsgTLcy0","auth":"Rytnctvsw624PvdIlOqWVA"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
