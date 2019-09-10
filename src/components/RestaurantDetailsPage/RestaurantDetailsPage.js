import React, { useState, useEffect } from 'react'
import './RestaurantDetailsPage.scss'


const RestaurantDetailsPage = props => {
   const [restaurant, setRestaurant] = useState({})
   
   const getRestaurant = async () => {
      const token = localStorage.getItem('token')
      const res = await fetch(`https://wing-quest.herokuapp.com/restaurant/${props.location.state.id}`, {
         method: 'GET',
         headers: {
            'Authorization': `Bearer ${token}`
         }
      })
      const body = await res.json()
      console.log(body)
      setRestaurant(body)
   }

   useEffect(() => {
      getRestaurant()
   }, [])

   return (
      <div>
         <h2>{restaurant.name}</h2>
         {restaurant.imageUrl && <img src={restaurant.imageUrl} alt={restaurant.name}/>}
         <p><b>Address:</b> {restaurant.city ? `${restaurant.address1}, ${restaurant.city}, ${restaurant.state}` : 'Not available'}</p>
         <p><b>Hours:</b> {restaurant.businessHours || 'Not available'}</p>
         <button
            onClick={() => props.history.goBack()} 
         >
            Back
         </button>
      </div>
   )
}

export default RestaurantDetailsPage