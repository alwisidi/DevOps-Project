const express = require('express'),
	app = express(),
	cors = require('cors'),
	greeting = require('./routes/greeting'),
	PORT = 3732

// Middleware
app.use(cors())

// TODO: Create api that returns a data string named 'message' contains 'Hello Tuwaiq 😊'
app.use('/api/greeting', greeting)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
