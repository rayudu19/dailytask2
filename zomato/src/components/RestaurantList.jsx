import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
  const restaurants = [
    {
      name: 'Pizza Hut',
      image: 'https://via.placeholder.com/150',
      description: 'A popular chain offering a wide variety of pizzas.'
    },
    {
      name: 'Burger King',
      image: 'https://via.placeholder.com/150',
      description: 'Famous for its flame-grilled burgers.'
    },
    {
      name: 'Subway',
      image: 'https://via.placeholder.com/150',
      description: 'Create your own sub with fresh ingredients.'
    },
    // Add more restaurants here
  ];

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard 
          key={index}
          name={restaurant.name}
          image={restaurant.image}
          description={restaurant.description}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
