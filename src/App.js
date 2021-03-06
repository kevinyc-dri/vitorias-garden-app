import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './scenes/Login'

import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Orders from './scenes/Orders'
import Products from './scenes/Products'
import Users from './scenes/Users'


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/users' component={Users}/>
        <Route path='/products' component={Products}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/' component={Login} />
      </Switch>
      <Main />
      <Footer />
    </Router>
  )
}

export default App;
