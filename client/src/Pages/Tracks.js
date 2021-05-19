import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Tracks = () => {
  const { id, type } = useParams()
  const { spotifyApi, formatNumber } = useContext(GlobalContext)

  const [something, setSomething] = useState('something')
  const [tracks, setTracks] = useState(null)
  const [playlistData, setPlaylistData] = useState(null)
  const [artistData, setArtistData] = useState(null)
  const [albumData, setAlbumData] = useState(null)

  useEffect(() => {
    if (type === 'playlist') {
      console.log('playlist')
      console.log('getting songs from playlist...')
      spotifyApi.getPlaylistTracks(id).then(tracks => {
        console.log(tracks.items)
        setTracks(tracks.items)
      })
      spotifyApi.getPlaylist(id).then(playlist => {
        console.log(playlist)
        setPlaylistData(playlist)
      })
    }
    if (type === 'artist') {
      console.log("Getting artist's songs ...")
      spotifyApi.getArtistTopTracks(id, 'IN').then(tracks => {
        console.log(tracks.tracks)
        setTracks(tracks.tracks)
      })
      spotifyApi.getArtist(id).then(artist => {
        console.log(artist)
        setArtistData(artist)
      })
    }
    if (type === 'album') {
      console.log('Getting album songs ...')
      spotifyApi.getAlbumTracks(id).then(tracks => {
        console.log(tracks.items)
        setTracks(tracks.items)
      })
      spotifyApi.getAlbum(id).then(album => {
        console.log(album)
        setAlbumData(album)
      })
    }
  }, [something])

  return (
    <Fragment>
      <Navbar />
      <div className='songs scrollable'>
        {playlistData && (
          <div className='songsHeading'>
            <img src={playlistData.images[0]?.url} alt='' />
            <div className='songsHeadingInfo'>
              <p>{playlistData.type}</p>
              <h2 className='heading'>{playlistData.name}</h2>
              <p>{playlistData.description}</p>
              <p>By {playlistData.owner.display_name}</p>
              <p>Total Tracks {playlistData.tracks.total}</p>
            </div>
          </div>
        )}
        {artistData && (
          <div className='songsHeading'>
            <img src={artistData.images[0]?.url} alt='' />
            <div className='songsHeadingInfo'>
              <p>{artistData.type}</p>
              <h2 className='heading'>{artistData.name}</h2>
              <p>Followers : {formatNumber(artistData.followers.total)}</p>
              {artistData.genres.length > 0 && (
                <p>
                  Genres:{' '}
                  {artistData.genres?.map(genre => (
                    <small key={genre}>{genre}</small>
                  ))}
                </p>
              )}
            </div>
          </div>
        )}
        {albumData && (
          <div className='songsHeading'>
            <img src={albumData.images[0]?.url} alt='' />
            <div className='songsHeadingInfo'>
              <p>{albumData.album_type}</p>
              <h2 className='heading'>{albumData.name}</h2>
              <p>Label : {albumData.label}</p>
              <p>Total Tracks : {albumData.total_tracks}</p>
              {albumData.artists.length > 0 && (
                <p>
                  Artists:{' '}
                  {albumData.artists?.map(artist => (
                    <small key={artist.id}>{artist.name}</small>
                  ))}
                </p>
              )}
            </div>
          </div>
        )}
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
