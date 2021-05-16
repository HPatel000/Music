import { PlayCircleFilledRounded } from '@material-ui/icons'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Tracks = props => {
  const { id, type } = useParams()
  const { spotifyApi } = useContext(GlobalContext)

  const [something, setSomething] = useState('something')
  const [tracks, setTracks] = useState(null)
  const [title, setTitle] = useState(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    if (type === 'playlist') {
      console.log('playlist')
      console.log('getting songs from playlist...')
      spotifyApi.getPlaylistTracks(id).then(tracks => {
        setTracks(tracks.items)
      })
    }
    if (type === 'artist') {
      console.log("Getting artist's songs ...")
      spotifyApi.getArtistTopTracks(id, 'IN').then(tracks => {
        setTracks(tracks.tracks)
      })
    }
    setTitle(props.location.data[0])
    setImg(props.location.data[1])
  }, [something])

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
              {tracks?.map(item => (
                <Song
                  key={item.track.id}
                  songInfo={item.track}
                  currPlaylistId={id}
                  setSomething={setSomething}
                />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {tracks?.map(item => (
                <Song
                  key={item.id}
                  songInfo={item}
                  currPlaylistId={id}
                  setTracks={null}
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
