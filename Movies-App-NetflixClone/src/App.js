import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/HomeRoute'
import Login from './components/Login'
import Populars from './components/Populars'
import SearchPage from './components/SearchPage'
import MovieDetails from './components/MovieDetails'
import AccountPage from './components/AccountPage'
import NotFoundPage from './components/NotFoundPage'

import './App.css'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/popular" exact component={Populars} />
      <ProtectedRoute path="/search" exact component={SearchPage} />
      <ProtectedRoute path="/account" exact component={AccountPage} />
      <ProtectedRoute path="/movies/:id" exact component={MovieDetails} />
      <Route exact path="/not-found" component={NotFoundPage} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
