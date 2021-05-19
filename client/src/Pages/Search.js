import { SearchRounded } from '@material-ui/icons'
import React, {
  createRef,
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react'
import Infocard from '../components/Infocard'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import GlobalContext from '../context/GlobalContext'

const Search = () => {
  const { spotifyApi } = useContext(GlobalContext)
  const scrollRef = createRef()

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
        console.log(result)
        setSearchResult(result)
      })
  }

  const getPlaylistsByCategory = category => {
    console.log('Getting Category playlist ...')
    scrollRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    spotifyApi.getCategoryPlaylists(category).then(playlists => {
      console.log(playlists)
      setSearchResult(playlists)
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
      <div className='search scrollable' ref={scrollRef}>
        <div className='searchHeader'>
          <form action='#'>
            <button className='searchBtn' onClick={e => searchQuery(e)}>
              <SearchRounded className='searchIcon' />
            </button>
            <input
              type='search'
              value={query}
              onChange={queryChange}
              placeholder='Search'
            />
          </form>
        </div>

        {searchResult && (
          <Fragment>
            {searchResult.tracks && (
              <div className='songs'>
                <h2 className='heading'>Songs</h2>
                <div className='songsList'>
                  {searchResult &&
                    searchResult.tracks.items?.map(item => (
                      <Song key={item.id} songInfo={item} />
                    ))}
                </div>
              </div>
            )}
            {searchResult.artists && (
              <div className='mainContainer'>
                <h2 className='heading'>Artists</h2>
                <div className='cardContainer'>
                  {searchResult.artists.items?.map(artist => (
                    <Infocard key={artist.id} cardInfo={artist} />
                  ))}
                </div>
              </div>
            )}
            {searchResult.playlists && (
              <div className='mainContainer'>
                <h2 className='heading'>Playlists</h2>
                <div className='cardContainer'>
                  {searchResult.playlists.items?.map(playlist => (
                    <Infocard key={playlist.id} cardInfo={playlist} />
                  ))}
                </div>
              </div>
            )}
            {searchResult.albums && (
              <div className='mainContainer'>
                <h2 className='heading'>Albums</h2>
                <div className='cardContainer'>
                  {searchResult.albums.items?.map(album => (
                    <Infocard key={album.id} cardInfo={album} />
                  ))}
                </div>
              </div>
            )}
          </Fragment>
        )}
        {categories && (
          <Fragment>
            <h2 className='heading'>Search by Category</h2>
            <div className='categoryCardContainer'>
              {categories?.items?.map(item => (
                <div
                  className='categoryCard'
                  key={item.id}
                  onClick={() => getPlaylistsByCategory(item.id)}
                >
                  <img src={item.icons[0].url} alt='' />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Search
