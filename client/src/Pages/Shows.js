import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'

const Shows = () => {
  const { spotifyApi } = useContext(GlobalContext)
  useEffect(() => {
    spotifyApi
      .getCategories({
        offset: 0,
        country: 'IN',
      })
      .then(
        function (data) {
          console.log(data)
        },
        function (err) {
          console.log('Something went wrong!', err)
        }
      )
  }, [])
  return (
    <div className='shows'>
      <h1>SHOWS</h1>
    </div>
  )
}

export default Shows
