const Router = require('express').Router;
const {welcome, menu, serviceOptions, action } = require('./handler');

const router = new Router();

// POST: /nocops/welcome
router.post('/welcome', (req, res) => {
  res.send(welcome());
});

// POST: /nocops/menu
router.post('/menu', (req, res) => {
  const digit = req.body.Digits;
  const sid = req.body.CallSid;
  return res.send(menu(digit, sid));
});

// POST: /nocops/serviceOptions
router.post('/serviceOptions', (req, res) => {
  const digit = req.body.Digits;
  const sid = req.body.CallSid;
  return res.send(serviceOptions(digit, sid));
});

router.post('/action', (req, res) => {
  const digit = req.body.Digits;
  const sid = req.body.CallSid;
  const caller = req.body.Caller;
  return res.send(action(digit, sid, caller));
});

module.exports = router;