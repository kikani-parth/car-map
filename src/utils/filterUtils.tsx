import { Placemark } from 'types';

export const filterCars = (
  cars: Placemark[],
  nameFilter: string,
  adddressFilter: string,
  coordinatesFilter: number[],
  engineTypeFilter: string,
  fuelFilter: number
): Placemark[] => {
  return cars.filter(
    (car) =>
      // Name filtering
      car.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      // Address filtering
      car.address.toLowerCase().includes(adddressFilter.toLowerCase()) &&
      //   car.coordinates.toLowerCase().includes(coordinatesFilter.toLowerCase())
      // Engine Type filtering
      car.engineType.toLowerCase().includes(engineTypeFilter.toLowerCase()) &&
      // Fuel filtering
      (fuelFilter ? car.fuel >= fuelFilter : true)
  );
};
