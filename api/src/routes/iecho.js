const {Router} = require('express');
const router = Router();
const Action = require('../controllers/Action.js');


const action = new Action()

router.get('/:text', action.invertText)

module.exports = router;