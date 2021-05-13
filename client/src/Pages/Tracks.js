import { PlayCircleFilledRounded } from '@material-ui/icons'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Tracks = props => {
  const { id } = useParams()
  const { getSongsFromPlaylist, playlistTracks } = useContext(GlobalContext)
  const [tracks, setTracks] = useState(null)
  const [title, setTitle] = useState(null)
  const [img, setImg] = useState(null)
  useEffect(() => {
    getSongsFromPlaylist(id)
    setTracks(playlistTracks)
    setTitle(props.location.data[0])
    setImg(props.location.data[1])
  }, [id])
  return (
    <Fragment>
      <Navbar />
      <div className='songs'>
        <img src={img} alt='' />
        <h2>{title}</h2>
        <PlayCircleFilledRounded className='playListBtn' />
        <div className='songsList'>
          {playlistTracks?.map(item => (
            <Song
              key={item.track.id}
              songInfo={item.track}
              currPlaylistId={id}
              setTracks={setTracks}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Tracks
