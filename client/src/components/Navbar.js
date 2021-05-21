import React, { useContext } from 'react'
import {
  HomeRounded,
  LibraryMusicRounded,
  PlaylistPlayRounded,
  SearchRounded,
} from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import { Avatar } from '@material-ui/core'

const Navbar = () => {
  const { user } = useContext(GlobalContext)
  return (
    <div className='navbar'>
      <h2 className='heading'>Music</h2>
      <div className='navItems'>
        <NavLink
          exact
          activeClassName='navItemActive'
          className='navItem'
          to='/'
        >
          <p className='navLink'>
            {' '}
            <HomeRounded className='navIcons' />
            Home
          </p>
        </NavLink>
        <NavLink
          exact
          activeClassName='navItemActive'
          className='navItem'
          to='/search'
        >
          <p className='navLink'>
            {' '}
            <SearchRounded className='navIcons' />
            Search
          </p>
        </NavLink>
        <NavLink
          exact
          activeClassName='navItemActive'
          className='navItem'
          to='/playlists'
        >
          <p className='navLink'>
            {' '}
            <PlaylistPlayRounded className='navIcons' />
            Playlist
          </p>
        </NavLink>
        <NavLink
          exact
          activeClassName='navItemActive'
          className='navItem'
          to='/yourlibrary'
        >
          <p className='navLink'>
            {' '}
            <LibraryMusicRounded className='navIcons' />
            Your Library
          </p>
        </NavLink>
      </div>
      {user && (
        <div className='navUser'>
          <Avatar className='avatar' />
          <h3 className='navUsername'>{user.display_name}</h3>
        </div>
      )}
    </div>
  )
}

export default Navbar
