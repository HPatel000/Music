import React, { Fragment, useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import Navbar from '../components/Navbar'
import Infocard from '../components/Infocard'
import Song from '../components/Song'

const Home = () => {
  const {
    user,
    token,
    getUser,
    getUserTopArtists,
    userTopArtists,
    getUserTopTracks,
    userTopTracks,
  } = useContext(GlobalContext)
  useEffect(() => {
    if (token !== null) {
      getUser()
      getUserTopArtists()
      getUserTopTracks()
    }
  }, [token])
  return (
    <Fragment>
      <Navbar />
      <div className='home'>
        <div className='mainContainer'>
          <h2>Top Artists</h2>
          <div className='cardContainer'>
            {userTopArtists?.items.map(artist => (
              <Infocard
                key={artist.id}
                img={artist.images[0]?.url}
                name={artist.name}
                type={artist.type}
                id={artist.id}
              />
            ))}
          </div>
        </div>
        <div className='songs'>
          <h2>Top Tracks</h2>
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
