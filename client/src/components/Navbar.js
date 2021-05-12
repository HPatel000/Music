import React from 'react'
import { HomeRounded, PlaylistPlay, SearchRounded } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Music 🎼</h1>
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
            <PlaylistPlay className='navIcons' />
            Playlist
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
