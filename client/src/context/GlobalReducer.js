export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_TOKEN':
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
      return {
        ...state,
        userPlaylist: action.payload,
      }
    case 'SET_ALERT':
      return {
        ...state,
        alerts: action.payload,
      }
    case 'REMOVE_ALERT':
      return {
        ...state,
        alerts: null,
      }
    default:
      return state
  }
}
