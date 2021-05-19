import React, { Fragment, useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Library = () => {
  const { spotifyApi } = useContext(GlobalContext)

  const [recentSongs, setRecentSongs] = useState(null)

  const getRecentlyPlayedSongs = () => {
    spotifyApi.getMyRecentlyPlayedTracks().then(tracks => {
      console.log(tracks)
      setRecentSongs(tracks.items)
    })
  }

  useEffect(() => {
    getRecentlyPlayedSongs()
  }, [])
  return (
    <Fragment>
      <Navbar />
      <div className='library scrollable'>
        {recentSongs && (
          <div className='songs'>
            <h2 className='heading'>Recently Played</h2>
            <div className='songsList'>
              {recentSongs?.map(item => (
                <Song key={item.id} songInfo={item.track} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Library
