import { PlayCircleFilledRounded } from '@material-ui/icons'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Tracks = props => {
  const { id, type } = useParams()
  const {
    getSongsFromPlaylist,
    playlistTracks,
    getArtistsTopSongs,
    artistsTopTracks,
  } = useContext(GlobalContext)
  const [tracks, setTracks] = useState(null)
  const [title, setTitle] = useState(null)
  const [img, setImg] = useState(null)
  useEffect(() => {
    if (type === 'playlist') {
      console.log('playlist')
      getSongsFromPlaylist(id)
      setTracks(playlistTracks)
    }
    if (type === 'artist') {
      getArtistsTopSongs(id)
      setTracks(artistsTopTracks)
    }
    setTitle(props.location.data[0])
    setImg(props.location.data[1])
  }, [id])
  return (
    <Fragment>
      <Navbar />
      <div className='songs'>
        <div className='songsHeading'>
          <img src={img} alt='' />
          <h2>{title}</h2>
          <PlayCircleFilledRounded className='playListBtn' />
        </div>
        <div className='songsList'>
          {type === 'playlist' ? (
            <Fragment>
              {playlistTracks?.map(item => (
                <Song
                  key={item.track.id}
                  songInfo={item.track}
                  currPlaylistId={id}
                  setTracks={setTracks}
                />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {artistsTopTracks?.map(item => (
                <Song
                  key={item.id}
                  songInfo={item}
                  currPlaylistId={id}
                  setTracks={setTracks}
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Tracks
