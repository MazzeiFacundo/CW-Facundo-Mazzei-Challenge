const { Router } = require('express');
const invertText = require('./iecho.js')

const router = Router();

router.use('/iecho', invertText)

module.exports = router;
