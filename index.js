const express = require('express')
const cors = require('cors')
const playerRouter = require('./routes/player.routes.js')
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api' , playerRouter)
app.listen(PORT , ()=> console.log(`server started on port ${PORT}`))