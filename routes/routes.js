const router = require('express').Router()

router.get('/',(req,res) => {
    res.json({msg:'Default Path'})
})

router.get('/items',(req,res) => {
    res.json({msg:'fetch all users'})
})

module.exports = router;