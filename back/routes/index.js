const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', (req, res)=> {
  res.send('Birds home page');
});
router.get('/join', (req, res) => {
  res.send('adsadadasdsa');
});

module.exports = router;