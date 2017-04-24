const express = require('express');
const router = express.Router();
const ctrl = require('../controller')

router.get('/', ctrl.index);

router.post('/', ctrl.insert);

router.put('/:id', ctrl. update);
module.exports = router;
