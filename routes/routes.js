const router = require('express').Router()
const Controller = require('../controller/controller')

router.get('/',(Controller.readAllItems));
router.get('/items',(Controller.readAllItems));

module.exports = router;