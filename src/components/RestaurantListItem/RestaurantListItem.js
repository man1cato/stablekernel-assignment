import React from 'react'
import { Link } from 'react-router-dom'
import './RestaurantListItem.scss'


const RestaurantListItem = ({ restaurant }) => {
   return (
      <div className='list-item'>
         {restaurant.imageUrl && <img src={restaurant.imageUrl} alt={restaurant.name} />}
         <h4 className='list-item__name'>{restaurant.name}</h4>
         <Link to={{
            pathname: `${restaurant.id}`,
            state: { id: restaurant.id }
         }}>
            More Details
         </Link>
      </div>
   )
}

export default RestaurantListItem