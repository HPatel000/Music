import { Add } from '@material-ui/icons'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import Infocard from '../components/Infocard'
import Navbar from '../components/Navbar'
import GlobalContext from '../context/GlobalContext'

const Playlists = () => {
  const { spotifyApi, user, userPlaylist, getUserPlaylists } =
    useContext(GlobalContext)
  const [modalDisplay, setModalDisplay] = useState(false)
  // const [userPlaylist, setUserPLaylist] = useState(null)
  const [newPlaylistInfo, setNewPlaylistInfo] = useState({
    name: '',
    description: '',
    public: false,
  })
  const onChange = e =>
    setNewPlaylistInfo({ ...newPlaylistInfo, [e.target.name]: e.target.value })
  const makeNewPlaylist = e => {
    e.preventDefault()
    console.log(newPlaylistInfo)
    spotifyApi
      .createPlaylist(user?.id, {
        name: newPlaylistInfo.name,
        description: newPlaylistInfo.description,
        public: newPlaylistInfo.public,
      })
      .then(res => {
        console.log(res)
        getUserPlaylists()
      })
  }
  // useEffect(() => {
  //   spotifyApi.getUserPlaylists(user?.id).then(playlists => {
  //     setUserPLaylist(playlists)
  //     console.log(playlists)
  //   })
  // }, [])
  return (
    <Fragment>
      <Navbar />
      <div className='mainContainer'>
        <h2>Uniquely Yours!</h2>
        <div className='cardContainer'>
          {userPlaylist &&
            userPlaylist.items.map(playlist => (
              <Infocard key={playlist.id} cardInfo={playlist} />
            ))}
        </div>
        <button
          className='newPlaylistBtn'
          onClick={() => {
            setModalDisplay(true)
            // removeSongFromPlaylist()
          }}
        >
          <Add className='newPlaylistBtnIcon' /> New Playlist
        </button>

        <div className={`modal ${modalDisplay ? 'modalShow' : 'modalHide'}`}>
          <div className='modalContent'>
            <button
              className='modalClose'
              onClick={() => setModalDisplay(!modalDisplay)}
            >
              &times;
            </button>
            <form action='#' className='newPlaylistForm'>
              <label htmlFor='playlistName'>Name </label>
              <input
                type='text'
                id='playlistName'
                name='name'
                onChange={onChange}
                value={newPlaylistInfo.name}
                required
              />
              <br />
              <label htmlFor='playlistDescription'>Description </label>
              <input
                type='text'
                id='playlistDescription'
                name='description'
                onChange={onChange}
                value={newPlaylistInfo.description}
              />
              <br />
              <label htmlFor='public'>Public </label>
              <input
                type='radio'
                id='public'
                name='playlistType'
                onChange={e =>
                  setNewPlaylistInfo({
                    ...newPlaylistInfo,
                    public: !newPlaylistInfo.public,
                  })
                }
                checked={newPlaylistInfo.public}
              />
              <span className='inputRadio'></span>
              <br />
              <label htmlFor='private'>Private </label>
              <input
                type='radio'
                id='private'
                name='playlistType'
                onChange={e =>
                  setNewPlaylistInfo({
                    ...newPlaylistInfo,
                    public: !newPlaylistInfo.public,
                  })
                }
                checked={!newPlaylistInfo.public}
              />
              <span className='inputRadio'></span>
              <br />
              <button
                onClick={e => {
                  makeNewPlaylist(e)
                  setModalDisplay(false)
                }}
              >
                Make Playlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Playlists
