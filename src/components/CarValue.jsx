import React from 'react';
import { useSelector } from 'react-redux';

const CarValue = () => {

  const totalCost = useSelector(({ cars : {data, searchTerm}}) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return filteredCars.reduce((acc, car) => {
      return acc + car.cost
    }, 0)
    
  });

  return (
    <div className='car-value'>
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue
