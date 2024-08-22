import React from 'react';
import { Placemark } from 'types';
import 'styles/CarList.css'; // Import the CSS file

interface CarListProps {
  cars: Placemark[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car List</h1>
      <ul className="car-list">
        {cars
          ? cars.map((car) => (
              <li key={car.vin} className="car-list-item">
                <strong>{car.name}</strong>
                <br />
                <span>Address: {car.address}</span>
                <br />
                <span>Coordinates: {car.coordinates}</span>
                <br />
                <span>Engine Type: {car.engineType}</span>
                <br />
                <span>Fuel: {car.fuel}</span>
                <br />
                <span>Exterior: {car.exterior}</span>
                <br />
                <span>Interior: {car.interior}</span>
                <br />
                <span>VIN: {car.vin}</span>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default CarList;
