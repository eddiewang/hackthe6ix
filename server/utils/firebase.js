const firebase = require("firebase");

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  databaseURL: "https://hackthe6ix-daaa3.firebaseio.com/",
  serviceAccount: {
  "type": "service_account",
  "project_id": "hackthe6ix-daaa3",
  "private_key_id": "c3bfabb61716c038413299112eb40904484f25e1",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDC3bxhYTTXCVZX\nhiW9p4hxO7udVTY6/42sJzFe7J3Dg7DG+dKFG+xGjjJEvOZQQoPxcOk3J2EUiNts\nQAs8241SZA40VAQY0srbqVNSdyadbhAxICAP9+N00wKmPgoQV4up19m6XRNe46qp\n8rk6eLF+MuO1+CNN49F6BssXEsDJ290iFsHMQyIMfo0P4QyTZ3f5LSc1vEUyD3Jl\nBT4mmwDUUudIZfqhhxgc2C7lbKUxXVuSAnv0e3y6i80yC33B5ptHzgBqzhgQ/JJJ\nNiGoQpSrIY/h1CKwdYoHm9wAgVnb+1kG/+NDBXWhGUh0pbxGmBvPFRJb3tj2vfy/\nYSwPK5bJAgMBAAECggEAH9wW/6jf9cR+DGNPalmo0jKc8xVKf4zmwd3KkaWICb5P\nOckApWiyUbrP9zMXSMoHPoNibfUPR0c08Nbrv3B6A51+QQn3fYOBTTa6+8GlW5ny\nJcYF1/aEhsY1Ka79AD0ABa3X2EN9dkcs0QpxRGEVS/fQCSFfzE1SI2xW6hfT02zJ\nB+Ux3Mm7nVaS+Peph5vWYFXAcIaN4I7TnGTQnZZsBezdosoXbBuY+HBiSgOumh0o\nSX52JtAEVOZCaEISFVGE9t0Rmt58dJpn/FbHAEFaBPXlKC1WlD5qnv7a3BDBRDvt\nbo/Srhsy48KZUUwlJAVEJuKhmGM/gw0SYPo3NZRYnQKBgQDjZmiE5TPasnQzh2tO\nCezR9iELDXfYyOZV/abvZ4GNgDdmSQcwhDAZ4l2leNbNv2IsoRAKszfftfJhJIqD\nQYIvqjnS5cAxDfakil1DDiQs+i0YOu6xTMoxKVHNPZhkWX1L1MzLXodBj5+nrN0j\nhwy5Gtgq1wiWbJn/D3w6R9X1HwKBgQDbX9XbL46QdXCTN/o2TMLr3gMVlJezUZxD\n3h/CQODiWFzh1sjjPnQLJyppELLInQQV3PrD49HKJsY2NljnZxm0Qtxwawi1yu28\ndoI0wT65WIKAQFEzVB2sHwZHvrz3Zb75L+BBQDddTm9miOnR0lZp2BSowT0wHKeZ\nrNJsg/JPFwKBgD+AMH2z95gBr1tYXImtUdmL7sxEVYxPBatLqts9vzrBbDb++6f7\nseb4hIgZx3orEII/89fZFig9idLAvoFKwM0Irx8Kk3HfYVmvXb3E7Cs3LXKPumn+\ndJPn4vT6V1zmdIvBf/LmkcSoE8BiEFrEcrQaH/VOmRJQf2xvaZRozQGnAoGBANi5\nKAQ/Sl+qtgmrDpUgZp0wmulyACCWaoOd6NA22jSiyTgPwizGIUx3Z+2eIpIQlN2o\nj1CBPFuyzLT4IgKSF5G/UBn7lAJNNWqvxViq5PWk3GApqk7ENgA6MjEk3Xin2vBA\n/RJZh5i1iVbJwf2ZB+fPIjHJnlJurKEkXEn6XKMHAoGAR78FMcDSir/+qushypcs\navCeQIxCX40JToCupT4peqE+ICX/afd5T8Puo+LnRqY0a6VOsqM3RSJB8s+mT/qO\nFnJ+YOtu2//ug1XgUze9f5qo82UjAR0TMlO2YJywpa4IYvIh5DXekvPtU0fTaorQ\n5CceHFwZAGiNRdolZfJ2HC8=\n-----END PRIVATE KEY-----\n",
  "client_email": "hackthe6ix@hackthe6ix-daaa3.iam.gserviceaccount.com",
  "client_id": "100167764608912047415",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/hackthe6ix%40hackthe6ix-daaa3.iam.gserviceaccount.com"
}
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = firebase.database();
const ref = db.ref("server");
const userRef = ref.child("users");
const entryRef = ref.child("entries")

module.exports = {
   saveUser: function(user){
      var id = user.id;
      delete user[id];
      userRef.child(id).set(user);
   },

   saveEntry: function(entry){
      var newKey = entryRef.child(entry.userId).push().key;
      entryRef.child(newKey).set(entry);
      userRef.child(entry.userId + '/posts/' + newKey).update(entry);
   },

   updateEntry: function(entry){
      entryRef.child(entry.id).update(entry);
   },

   retrieveEntryByUser: function(user, cb){
      var currentRef = userRef.child(user.id);
      currentRef.on("value", function(snapshot) {
         cb(snapshot.val());
      }, function (errorObject) {
         console.log("Retrieving the posts from " + user.name);
      });
   }

};