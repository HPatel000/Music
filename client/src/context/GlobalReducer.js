export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_TOKEN':
      console.log(action.payload)
      return {
        ...state,
        token: action.payload,
      }
    case 'INITIALIZE_SPOTIFY_API':
      return {
        ...state,
        spotifyApi: action.payload,
      }
    case 'SET_USER_PLAYLISTS':
      console.log(action.payload)
      return {
        ...state,
        userPlaylist: action.payload,
      }
    default:
      return state
  }
}
