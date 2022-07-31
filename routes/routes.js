const router = require('express').Router()
const Controller = require('../controller/controller')

router.get('/',(Controller.readAllItems));
router.get('/items',(Controller.readAllItems));
router.get('/items/:id',Controller.readSingleItems);

module.exports = router;