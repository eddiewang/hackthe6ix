const router = require('express').Router(); // eslint-disable-line new-cap
const indico = require('indico.io');
const fb = require('../utils/firebase');

// firebase.initializeApp({})
indico.apiKey = "a68f0a5cfc0ffdbe7725d0b08b787e4d";

router.post('/emotions', (req, res) => {
  const { stringState } = req.body;
  indico
    .emotion(stringState)
    .then((data) => {
      let post = {...req.body, emotions: data, userId: 1}
      console.log(post);
      fb.saveEntry(post)
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send(err);
    })
});

router.get('/posts', (req, res) => {
  const user = {
    'id': 1,
    'name': 'test'
  }
  fb.retrieveEntryByUser(user, (data) => {
    res.status(200).json(data);
  });
});



module.exports = router;
