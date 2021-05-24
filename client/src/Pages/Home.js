import React, { Fragment, useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import Navbar from '../components/Navbar'
import Infocard from '../components/Infocard'

const Home = () => {
  const { token, spotifyApi, getUserPlaylists, user } =
    useContext(GlobalContext)
  const [userTopArtists, setUserTopArtists] = useState(null)
  const [newReleases, setNewReleases] = useState(null)
  useEffect(() => {
    if (token !== null) {
      spotifyApi.getMyTopArtists().then(artists => {
        setUserTopArtists(artists)
      })

      getUserPlaylists()
      spotifyApi.getNewReleases().then(res => {
        console.log(res)
        setNewReleases(res.albums)
      })
    }
  }, [token])
  return (
    <Fragment>
      <Navbar />
      <div className='home scrollable'>
        {userTopArtists && user && (
          <div className='mainContainer scrollable'>
            <h2 className='heading'>{user?.display_name}'s Top Artists</h2>
            <div className='cardContainer'>
              {userTopArtists?.items.map(artist => (
                <Infocard key={artist.id} cardInfo={artist} />
              ))}
            </div>
          </div>
        )}
        {newReleases && user && (
          <div className='mainContainer scrollable'>
            <h2 className='heading'>New Releases</h2>
            <div className='cardContainer'>
              {newReleases?.items.map(album => (
                <Infocard key={album.id} cardInfo={album} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Home
