const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('projects')
})

module.exports = router;