import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import useAuth from '../useAuth'
import Navbar from './Navbar'

const Home = ({ code }) => {
  const accessToken = useAuth(code)
  const { user, setToken, getUser } = useContext(GlobalContext)
  useEffect(() => {
    if (!accessToken) return
    setToken(accessToken)
    getUser()
  }, [accessToken])
  return (
    <div className='Home'>
      <Navbar />
    </div>
  )
}

export default Home
