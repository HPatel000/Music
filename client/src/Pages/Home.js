import React, { Fragment, useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import Navbar from '../components/Navbar'
import Infocard from '../components/Infocard'
import Song from '../components/Song'

const Home = () => {
  const { token, spotifyApi, getUserPlaylists, user } =
    useContext(GlobalContext)
  const [userTopArtists, setUserTopArtists] = useState(null)
  const [userTopTracks, setUserTopTracks] = useState(null)
  useEffect(() => {
    if (token !== null) {
      spotifyApi.getMyTopArtists().then(artists => {
        setUserTopArtists(artists)
      })
      spotifyApi.getMyTopTracks().then(tracks => {
        setUserTopTracks(tracks.items)
      })
      getUserPlaylists()
    }
  }, [token])
  return (
    <Fragment>
      <Navbar />
      <div className='home scrollable'>
        <div className='mainContainer scrollable'>
          <h2 className='heading'>{user?.display_name}'s Top Artists</h2>
          <div className='cardContainer'>
            {userTopArtists?.items.map(artist => (
              <Infocard key={artist.id} cardInfo={artist} />
            ))}
          </div>
        </div>
        <div className='songs scrollable'>
          <h2 className='heading'>{user?.display_name}'s Top Tracks</h2>
          <div className='songsList'>
            {userTopTracks?.map(item => (
              <Song key={item.id} songInfo={item} setTracks={null} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
