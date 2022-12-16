const Router = require('express')
const router = new Router()
const Controllers = require('../controller/player.controller.js')



router.post('/player' , Controllers.Create)
router.get('/player' , Controllers.Get)
router.delete('/player/:id' , Controllers.Delete)

module.exports = router