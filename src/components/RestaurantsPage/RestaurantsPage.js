import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import RestaurantListItem from '../RestaurantListItem/RestaurantListItem'
import './RestaurantsPage.scss'


const RestaurantsPage = props => {
   const [restaurants, setRestaurants] = useState([])

   const getRestaurants = async () => {
      const storedRestaurants = localStorage.getItem('restaurants')
      if (storedRestaurants) {
         setRestaurants(JSON.parse(storedRestaurants))
      } else {
         const token = localStorage.getItem('token')
         const res = await fetch('https://wing-quest.herokuapp.com/restaurant', {
            method: 'GET',
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })
         const body = await res.json()
         localStorage.setItem('restaurants', JSON.stringify(body))
         setRestaurants(body)
      }
   }

   useEffect(() => {
      getRestaurants()
   }, [])

   return (
      <div>
         <div className='header'>
            <img               
               src='/wingquest-bg.svg'
               alt='WingQuest'
            />
            <div className='header__title'>
               <h1>Restaurants</h1>
            </div>
         </div>
         <div className='restaurants-list'>
            {_.sortBy(restaurants, ['name']).map(restaurant => (
               <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>
            ))}
         </div>
      </div>
   )
}

export default RestaurantsPage