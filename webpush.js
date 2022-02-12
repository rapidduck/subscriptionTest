const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cmlINweO6rM:APA91bGplfl15u046NPQqDxDbLUgI0h5a69H7idJ73SqQ5T4RKEhAV1X_qo1pkEq5NdcPresq1QNqC_hRRADnEvV6Jfyllgwwn0drfqvVve14q1gBgKM9t37mbmt3uNy-FwowviEUW9u","expirationTime":null,"keys":{"p256dh":"BLTutiP78RubKVG_N9K9vlDLE4FBf8H4UR5MCI2o4z3vXnYDTm652AmzUS5B-juWV55XUP9qe53E9XE84FDJTHk","auth":"y1QYc_zhDHxI5bbB5aSdgw"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
