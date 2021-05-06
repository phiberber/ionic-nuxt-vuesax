const express = require('express')
const config = require('../nuxt.config.js')
const app = express()

app.use(require('./routes/user/user.js'))

if (require.main === module) {
  app.listen(config.server.port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app