import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import GlobalReducer from './GlobalReducer'
import SpotifyWebApi from 'spotify-web-api-node'

const GlobalState = props => {
  const initailState = {
    loading: false,
    user: null,
  }

  const [state, dispatch] = useReducer(GlobalReducer, initailState)

  const spotify = new SpotifyWebApi()

  const setToken = accessToken => {
    spotify.setAccessToken(accessToken)
  }

  const getUser = () => {
    console.log('Getting User ...')
    spotify.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        user: state.user,
        setToken,
        getUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
