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
    userTopArtists: null,
    userTopTracks: null,
    searchResult: null,
    playlistTracks: null,
    currPlaylistId: null,
    artistsTopTracks: null,
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const spotifyApi = new SpotifyWebApi()

  const setToken = accessToken => {
    console.log(
      '🚀 ~ file: GlobalState.js ~ line 23 ~ accessToken',
      accessToken
    )
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
