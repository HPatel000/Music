import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className='App'>
      {code ? (
        <Router>
          <Switch>
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
