const express = require('express')
const app = express()
// simulate a situation where your application breaks down and ensure that the check detects the problem. 

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  /* eslint-disable no-alert, no-console */
  console.log('server started on port 5000')
  console.log(`Server running on port ${PORT}`)
})
