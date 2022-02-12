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
const pushSubscription = {"endpoint":"https://wns2-par02p.notify.windows.com/w/?token=BQYAAACNY4RzkxRpqUpNaMUtJdQUy3WBd6iz%2fL9mQdcRxeui77cSfJGRKq9xQ5dowGZbeRv5IRaH7nZnfc4dlxM9qyBPrai4%2bPduzoEkGK9IxyNhy8ae5fwzLF7BQJ9CbCnIXw11HvrkfLAWhTalpNjUBRAWHN95UcseiPUVgxwq9P%2fP2DF38B2NyNNcdFLFqigZYH%2fBotGwJVfPVVJOtI05ZomJBDg3m370eTgWkRwhLKh8rZEmGRKZQVi%2fM4SEXX3po2jJuXXk6Lvx3l9bY2M%2fzgYBKEYctLKmubh%2fi7HSh5I4OIPGsDnlEF7wM24PCKuDG3Y%2fCEB7jLzG3V8ctU3MfFxvzRIyWhDnmJRczkPvKnmGnQ%3d%3d","expirationTime":null,"keys":{"p256dh":"BOJ51sGjeqELmwLD7mspo7N5D51ygurj83L0yMa3HdRLDaAjWN9dwWEbwAo_mGV1hA3MVUmQ8MS4KQwtfCqdZzc","auth":"rO4-9PXqxLe91vyf63bscw"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
console.log("Performed")