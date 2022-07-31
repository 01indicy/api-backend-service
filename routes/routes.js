const router = require('express').Router()
const Controller = require('../controller/controller')

router.get('/',(Controller.readAllItems));
router.get('/items',(Controller.readAllItems));
router.get('/items/:id',Controller.readSingleItems);
router.put('/items/:id',Controller.updateItem);
router.delete('/items/:id',Controller.deleteItems);

module.exports = router;