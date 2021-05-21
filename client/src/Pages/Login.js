import React from 'react'

const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = 'f8a20825f0214028b72b59cd14a4ac2e'

const redirectUri = 'https://reactjs-music.herokuapp.com'
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-follow-read',
  'user-follow-modify',
  'user-library-read',
  'user-library-modify',
  'user-modify-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
]

const accessUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}`

const Login = () => {
  return (
    <div className='Login'>
      <h1>LET THE MUSIC PLAY</h1>
      <a href={accessUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login
