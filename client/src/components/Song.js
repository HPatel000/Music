import { Favorite, PlaylistAdd } from '@material-ui/icons'
import React, { Fragment, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Song = ({ songInfo, setSomething, currPlaylistId }) => {
  const { spotifyApi, getTime, userPlaylist, setAlert } =
    useContext(GlobalContext)

  const song = {
    id: songInfo.id,
    trackName: songInfo.name,
    duration: songInfo.duration_ms,
    img: songInfo.album?.images[0]?.url,
    artists: songInfo.artists.map((artist) => artist.name),
  }

  const addToPLaylist = (playlistId, trackId) => {
    spotifyApi.addTracksToPlaylist(playlistId, trackId).then((res) => {
      setAlert('Song added to playlist')
    })
  }

  const removeSongFromPlaylist = (playlistId, trackId) => {
    spotifyApi.removeTracksFromPlaylist(playlistId, trackId).then((res) => {
      setSomething(res)
      setAlert('Song removed from the playlist')
    })
  }

  return (
    <div className='songInfo'>
      <img className='songImg' src={song.img} alt='' />
      <div className='songName'>
        {song.trackName}
        <br />
        {song.artists?.map((artist) => (
          <small key={artist}>{artist}</small>
        ))}
      </div>
      <div className='songDuration'>{getTime(song.duration)}</div>
      <Favorite className='songLikeBtn' />
      <div className='dropup'>
        <PlaylistAdd className='songAddToPlaylist' />
        <div className='dropupContent'>
          {/* <p>Add To Playlist</p> */}
          {userPlaylist?.items.map((playlist) => (
            <Fragment key={playlist.id}>
              {playlist.id === currPlaylistId ? (
                <button
                  className='removeFromPlaylistButton'
                  onClick={() =>
                    removeSongFromPlaylist(currPlaylistId, [
                      `spotify:track:${song.id}`,
                    ])
                  }
                >
                  <small>Remove From</small>
                  <br />
                  {playlist.name}
                </button>
              ) : (
                <button
                  onClick={() =>
                    addToPLaylist(playlist.id, [`spotify:track:${song.id}`])
                  }
                >
                  <small>Add to</small>
                  <br />
                  {playlist.name}
                </button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Song
