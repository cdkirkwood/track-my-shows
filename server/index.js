const Express = require('express')
const app = Express()
const morgan = require('morgan')
const port = 5000

if (process.env.NODE_ENV !== 'production') require('../secrets')

app.use(morgan('dev'))

app.use('/api', require('./routes'))


app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})

