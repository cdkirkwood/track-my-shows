const Express = require('express')
const app = Express()
const morgan = require('morgan')
const port = 5000

app.use(morgan('dev'))

app.get('/api/poop', (req, res) => {
  res.send('whatever')
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})

