const router = require('express').Router()

router.use(require('./login.js'))
router.use('/api',require('./userRoutes'))
router.use('/api',require('./postRoutes'))

module.exports = router