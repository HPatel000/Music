import React, { Fragment, useContext, useEffect, useState } from 'react'
import Infocard from '../components/Infocard'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Library = () => {
  const { spotifyApi, userPlaylist } = useContext(GlobalContext)
  const [recentSongs, setRecentSongs] = useState(null)
  const [savedAlbums, setSavedAlbums] = useState(null)
  const [followedArtist, setFollowedArtist] = useState(null)

  useEffect(() => {
    spotifyApi.getMyRecentlyPlayedTracks().then(tracks => {
      console.log(tracks)
      setRecentSongs(tracks.items)
    })
    spotifyApi.getMySavedAlbums().then(albums => {
      console.log(albums)
      setSavedAlbums(albums)
    })
    spotifyApi.getFollowedArtists().then(artists => {
      console.log(artists)
      setFollowedArtist(artists.artists)
    })
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='library scrollable'>
        {savedAlbums && (
          <div className='mainContainer'>
            <h2 className='heading'>Albums</h2>
            <div className='cardContainer'>
              {savedAlbums.items?.map(album => (
                <Infocard key={album.album.id} cardInfo={album.album} />
              ))}
            </div>
          </div>
        )}
        {followedArtist && (
          <div className='mainContainer'>
            <h2 className='heading'>Artists</h2>
            <div className='cardContainer'>
              {followedArtist.items?.map(artist => (
                <Infocard key={artist.id} cardInfo={artist} />
              ))}
            </div>
          </div>
        )}
        {userPlaylist && (
          <div className='mainContainer'>
            <h2 className='heading'>Playlists</h2>
            <div className='cardContainer'>
              {userPlaylist &&
                userPlaylist.items.map(playlist => (
                  <Infocard key={playlist.id} cardInfo={playlist} />
                ))}
            </div>
          </div>
        )}

        {recentSongs && (
          <div className='songs'>
            <h2 className='heading'>Recently Played</h2>
            <div className='songsList'>
              {recentSongs?.map(item => (
                <Song key={item.played_at} songInfo={item.track} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Library
