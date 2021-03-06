import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Playlists from './Pages/Playlists'
import useAuth from './useAuth'
import { useContext, useEffect } from 'react'
import GlobalContext from './context/GlobalContext'
import Search from './Pages/Search'
import Tracks from './Pages/Tracks'
import Library from './Pages/Library'
import Alerts from './components/Alerts'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  const accessToken = useAuth(code)
  const { setToken } = useContext(GlobalContext)
  useEffect(() => {
    if (!accessToken) return
    setToken(accessToken)
  }, [accessToken])
  return (
    <div className='App'>
      <Alerts />
      {code ? (
        <Router>
          <Switch>
            <Route exact path='/:type/:id' component={Tracks} />
            <Route exact path='/:type/:id' component={Tracks} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/yourlibrary' component={Library} />
            <Route exact path='/playlists' component={Playlists} />
            <Route exact path='/' component={Home} />
            <Route path='*' component={Home} />
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
