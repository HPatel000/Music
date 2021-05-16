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
    // case 'SET_TOP_ARTISTS':
    // console.log(action.payload)
    // return {
    //   ...state,
    //   userTopArtists: action.payload,
    // }
    // case 'SET_ARTISTS_TOP_TRACKS':
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     artistsTopTracks: action.payload,
    //   }
    // case 'SET_TOP_TRACKS':
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     userTopTracks: action.payload,
    //   }
    // case 'SET_PLAYLIST_SONGS':
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     playlistTracks: action.payload,
    //   }
    // case 'SET_SEARCH_RESULT':
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     searchResult: action.payload,
    //   }
    default:
      return state
  }
}
