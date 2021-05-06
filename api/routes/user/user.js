const { Router } = require(`express`)
const router = Router()

const users = [ 'Peixe', 'Bernardo', 'Caroba', 'Duda' ]

router.get('/user/:id', async (req, res) => {
    const user = users[req.params.id]
    res.status(200).json({ success: user !== undefined, name: user })
})

module.exports = router