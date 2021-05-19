import React from 'react'
import {
  HomeRounded,
  LibraryMusicRounded,
  PlaylistPlayRounded,
  SearchRounded,
} from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar
