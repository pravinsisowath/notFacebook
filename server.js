require('dotenv').config()

const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(require('./routes'))

require('./connection')
.sync()
.then(() => app.listen(PORT, () => console.log('http://localhost:3000')))
.catch(err => console.error(err))