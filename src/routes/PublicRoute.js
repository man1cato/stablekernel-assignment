import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
   <Route 
      {...rest} 
      component={(props) => (
         isAuthenticated ? (
            <Redirect to="/restaurants" />
         ) : (
            <Component {...props} />
         )
      )} 
   />
)

export default PublicRoute