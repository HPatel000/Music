import React, { Fragment, useContext, useEffect, useState } from 'react'
import Infocard from '../components/Infocard'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Library = () => {
  const { spotifyApi, userPlaylist, user } = useContext(GlobalContext)
  const [savedAlbums, setSavedAlbums] = useState(null)
  const [followedArtist, setFollowedArtist] = useState(null)
  const [userTopTracks, setUserTopTracks] = useState(null)

  useEffect(() => {
    spotifyApi.getMySavedAlbums().then((albums) => {
      setSavedAlbums(albums)
    })
    spotifyApi.getFollowedArtists().then((artists) => {
      setFollowedArtist(artists.artists)
    })
    spotifyApi.getMyTopTracks().then((tracks) => {
      setUserTopTracks(tracks.items)
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
              {savedAlbums.items?.map((album) => (
                <Infocard key={album.album.id} cardInfo={album.album} />
              ))}
            </div>
          </div>
        )}
        {followedArtist && (
          <div className='mainContainer'>
            <h2 className='heading'>Artists</h2>
            <div className='cardContainer'>
              {followedArtist.items?.map((artist) => (
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
                userPlaylist.items.map((playlist) => (
                  <Infocard key={playlist.id} cardInfo={playlist} />
                ))}
            </div>
          </div>
        )}

        {userTopTracks && user && (
          <div className='songs scrollable'>
            <h2 className='heading'>{user?.display_name}'s Top Tracks</h2>
            <div className='songsList'>
              {userTopTracks?.map((item) => (
                <Song key={item.id} songInfo={item} setTracks={null} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Library
