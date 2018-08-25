const Express = require('express')
const app = Express()
const morgan = require('morgan')
const port = 8080

app.use(morgan('dev'))

app.get('/poop', (req, res) => {
  res.send('whaever')
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})

