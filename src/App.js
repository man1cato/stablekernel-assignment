
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

import LoginPage from './components/LoginPage/LoginPage'
import RestaurantsPage from './components/RestaurantsPage/RestaurantsPage'
import RestaurantDetailsPage from './components/RestaurantDetailsPage/RestaurantDetailsPage'
import NotFoundPage from './components/NotFoundPage'

import './App.scss'

const App = ({isAuthenticated}) => {
  return (
    <Router>
      <div className='app-container'>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact isAuthenticated={isAuthenticated} />
          <PrivateRoute path="/restaurants" component={RestaurantsPage} exact isAuthenticated={isAuthenticated} />
          <PrivateRoute path="/restaurants/:id" component={RestaurantDetailsPage} isAuthenticated={isAuthenticated} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
} 

export default App