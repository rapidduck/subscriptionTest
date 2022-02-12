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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/czC7KzW_WcA:APA91bGfDY9KzPc2vsn9l7OjHiTVBIZlStA5z3OsSi_1ytOrc6AfwPZ7OGeZfxIIHbloUBy6nOeXD-Bo2go6iWnBl9Hau2-754hLxhbLC6mZkDrtSDNQsAqIrWxZ9xkUW_0SEC0OetKo","expirationTime":null,"keys":{"p256dh":"BFMxkgy6reY4kWBDnD9aDc6AU6YusFFAa1_xyCyqEnlN-SQ_IwfNQ6v-9BNSjOPH6-z1JWrkC2QfUcGarD3ObdY","auth":"nIIulDWQHZ2DzUZnl5bfiA"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
console.log("Performed")