const express = require('express')
const app = express()

app.get('/', async (req, res) => {
	await res.json({ message: 'Hey' })
})

module.exports = app
