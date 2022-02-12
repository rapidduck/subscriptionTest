from pywebpush import webpush, WebPushException

try:
    push = webpush(
        subscription_info={
                "endpoint": "https://fcm.googleapis.com/fcm/send/cmlINweO6rM:APA91bGplfl15u046NPQqDxDbLUgI0h5a69H7idJ73SqQ5T4RKEhAV1X_qo1pkEq5NdcPresq1QNqC_hRRADnEvV6Jfyllgwwn0drfqvVve14q1gBgKM9t37mbmt3uNy-FwowviEUW9u",
                "expirationTime": "null",
                "keys": {
                        "p256dh":"BLTutiP78RubKVG_N9K9vlDLE4FBf8H4UR5MCI2o4z3vXnYDTm652AmzUS5B-juWV55XUP9qe53E9XE84FDJTHk",
                        "auth": "y1QYc_zhDHxI5bbB5aSdgw"
                         }
                },
        data="Mary had a little lamb, with a nice mint jelly",
        vapid_private_key="CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8",
        vapid_claims={
                "sub": "mailto:YourNameHere@example.org",
            }
    )
    print(f"pushed {push}")
except WebPushException as ex:
    print("I'm sorry, Dave, but I can't do that: {}", repr(ex))
    # Mozilla returns additional information in the body of the response.
    if ex.response and ex.response.json():
        extra = ex.response.json()
        print("Remote service replied with a {}:{}, {}",
              extra.code,
              extra.errno,
              extra.message
              )