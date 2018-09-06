const Express = require('express')
const router = Express.Router()
const imdb = require('imdb-api')
const axios = require('axios')
const apiKey = process.env.MOVIE_DB_API_KEY
const ozarkId = '69740'

router.get('/poop', (req, res) => {
  res.send('efhsdjkfhskjd')
})

router.get('/find', async (req, res) => {
  const result = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${req.query.show}`)
  res.send(result.data)
})

router.get('/find/ozark', async (req, res) => {
  const result = await axios.get(`https://api.themoviedb.org/3/tv/${ozarkId}?api_key=${apiKey}`)
  res.send(result.data)
})

module.exports = router


