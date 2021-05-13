import { SearchRounded } from '@material-ui/icons'
import React, { Fragment, useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Search = () => {
  const { searchResult, searchSong } = useContext(GlobalContext)
  const [query, setQuery] = useState('')
  const queryChange = e => {
    setQuery(e.target.value)
    console.log(query)
  }
  return (
    <Fragment>
      <Navbar />
      <div className='search'>
        <div className='searchHeader'>
          <h2>Search</h2>
          <input
            type='text'
            value={query}
            onChange={queryChange}
            placeholder='Search'
          />
          <button className='searchBtn' onClick={() => searchSong(query)}>
            <SearchRounded className='searchIcon' />
          </button>
        </div>
        {/* <div className="songs"> */}
        <div className='songsList'>
          {/* tracks.items[0].name */}
          {searchResult &&
            searchResult.tracks.items?.map(item => (
              <Song key={item.id} songInfo={item} />
            ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Search
