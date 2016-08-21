const router = require('express').Router(); // eslint-disable-line new-cap
const indico = require('indico.io');
const fb = require('../utils/firebase');

// firebase.initializeApp({})
indico.apiKey = "a68f0a5cfc0ffdbe7725d0b08b787e4d";

router.post('/emotions', (req, res) => {
  const { stringState } = req.body;
  const promiseEmotion = indico.emotion(stringState);
  const promiseSentiment = indico.sentiment(stringState);
  const promiseKeywords = indico.keywords(stringState);

  Promise.all([promiseEmotion, promiseSentiment, promiseKeywords])
    .then(([emotion, sentiment, keywords]) => {
      const postObject = {
        ...req.body,
        emotion,
        sentiment,
        keywords,
      }
      console.log(postObject);
      res.status(200).json(postObject);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
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
