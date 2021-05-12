require('dotenv').config()

const express = require('express')
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new spotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log('🚀 ~ file: index.js ~ line 28 ~ app.post ~ err', err)
      res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new spotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log('🚀 ~ file: index.js ~ line 51 ~ app.post ~ err', err)
    })
})

app.listen(3001)
