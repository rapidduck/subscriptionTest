from pywebpush import webpush
from sqlitedict import SqliteDict

db = SqliteDict("db.sqlite", "w")
print(len(db))
# for device, data in db.iteritems():
#     webpush(data,
#             "Hey Hey",
#             vapid_private_key="-RMX3o_klK67WLgFA2vc6IURRwqxkUQzDkHyh4bWAEw",
#             vapid_claims={"sub": "mailto:testemail@gmail.com"})
#     print(f"Pushed to {device}")
db.close()

