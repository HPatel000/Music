import { SearchRounded } from '@material-ui/icons'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import Infocard from '../components/Infocard'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Search = () => {
  const { spotifyApi } = useContext(GlobalContext)

  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState(null)
  const [searchResult, setSearchResult] = useState(null)

  const queryChange = e => {
    setQuery(e.target.value)
  }

  const searchQuery = e => {
    e.preventDefault()
    console.log(`Searching for ${query}`)
    spotifyApi
      .search(query, ['track', 'artist', 'playlist', 'album'], { limit: 10 })
      .then(result => {
        setSearchResult(result)
      })
  }

  useEffect(() => {
    spotifyApi
      .getCategories({
        offset: 0,
        country: 'IN',
      })
      .then(
        function (data) {
          console.log(data)
          setCategories(data.categories)
        },
        function (err) {
          console.log('Something went wrong!', err)
        }
      )
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='search'>
        <div className='searchHeader'>
          <form action='#'>
            <input
              type='text'
              value={query}
              onChange={queryChange}
              placeholder='Search'
            />
            <button className='searchBtn' onClick={e => searchQuery(e)}>
              <SearchRounded className='searchIcon' />
            </button>
          </form>
        </div>
        {categories && (
          <Fragment>
            <h3 className='categorySearchTitle'>Search by Category</h3>
            <div className='categoryCardContainer'>
              {categories?.items?.map(item => (
                <div className='categoryCard' key={item.id}>
                  <img src={item.icons[0].url} alt='' />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </Fragment>
        )}

        {searchResult && (
          <Fragment>
            <div className='songs'>
              <h2>Songs</h2>
              <div className='songsList'>
                {searchResult &&
                  searchResult.tracks.items?.map(item => (
                    <Song key={item.id} songInfo={item} />
                  ))}
              </div>
            </div>
            <div className='mainContainer'>
              <h2>Artists</h2>
              <div className='cardContainer'>
                {searchResult.artists.items?.map(artist => (
                  <Infocard key={artist.id} cardInfo={artist} />
                ))}
              </div>
            </div>
            <div className='mainContainer'>
              <h2>Playlists</h2>
              <div className='cardContainer'>
                {searchResult.playlists.items?.map(playlist => (
                  <Infocard key={playlist.id} cardInfo={playlist} />
                ))}
              </div>
            </div>
            <div className='mainContainer'>
              <h2>Albums</h2>
              <div className='cardContainer'>
                {searchResult.albums.items?.map(album => (
                  <Infocard key={album.id} cardInfo={album} />
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Search
