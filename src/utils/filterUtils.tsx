import { Placemark } from 'types';

export const filterCars = (
  cars: Placemark[],
  nameFilter: string,
  adddressFilter: string,
  coordinatesFilter: number[]
): Placemark[] => {
  return cars.filter(
    (car) =>
      car.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      car.address.toLowerCase().includes(adddressFilter.toLowerCase())
    //   car.coordinates.toLowerCase().includes(coordinatesFilter.toLowerCase())
  );
};
