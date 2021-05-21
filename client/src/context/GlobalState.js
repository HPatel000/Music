import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import GlobalReducer from './GlobalReducer'
import SpotifyWebApi from 'spotify-web-api-js'

const GlobalState = props => {
  const initialState = {
    spotifyApi: null,
    token: null,
    loading: false,
    user: null,
    userPlaylist: null,
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const spotifyApi = new SpotifyWebApi()

  const setToken = accessToken => {
    spotifyApi.setAccessToken(accessToken)
    dispatch({
      type: 'SET_TOKEN',
      payload: accessToken,
    })
    dispatch({
      type: 'INITIALIZE_SPOTIFY_API',
      payload: spotifyApi,
    })
    getUser()
  }

  // spotifyApi.getRecommendations()
  // // spotifyApi.getNewReleases
  // // spotifyApi.getRecommendations

  const getUser = () => {
    console.log('Getting User ...')
    spotifyApi.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    })
  }

  const getUserPlaylists = () => {
    console.log('getting user playlist...')
    spotifyApi.getUserPlaylists(initialState.user?.id).then(playlists => {
      dispatch({
        type: 'SET_USER_PLAYLISTS',
        payload: playlists,
      })
    })
  }

  const getTime = millisec => {
    var seconds = (millisec / 1000).toFixed(0)
    var minutes = Math.floor(seconds / 60)
    var hours = ''
    if (minutes > 59) {
      hours = Math.floor(minutes / 60)
      hours = hours >= 10 ? hours : '0' + hours
      minutes = minutes - hours * 60
      minutes = minutes >= 10 ? minutes : '0' + minutes
    }
    seconds = Math.floor(seconds % 60)
    seconds = seconds >= 10 ? seconds : '0' + seconds
    if (hours !== '') {
      return hours + ':' + minutes + ':' + seconds
    }
    return minutes + ':' + seconds
  }

  const formatNumber = num => {
    if (num < 1000) {
      return num
    }
    var si = [
      { v: 1e3, s: 'K' },
      { v: 1e6, s: 'M' },
      { v: 1e9, s: 'B' },
      { v: 1e12, s: 'T' },
      { v: 1e15, s: 'P' },
      { v: 1e18, s: 'E' },
    ]
    var i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].v) {
        break
      }
    }
    return (
      (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
      si[i].s
    )
  }

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        spotifyApi: state.spotifyApi,
        loading: state.loading,
        user: state.user,
        userPlaylist: state.userPlaylist,
        getTime,
        setToken,
        getUser,
        getUserPlaylists,
        formatNumber,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
