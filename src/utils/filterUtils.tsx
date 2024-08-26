import { Placemark } from 'types';

export const filterCars = (
  cars: Placemark[],
  nameFilter: string,
  adddressFilter: string,
  coordinatesFilter: number[], //
  engineTypeFilter: string,
  fuelFilter: number,
  exteriorFilter: string,
  interiorFilter: string,
  vinFilter: string
): Placemark[] => {
  return cars.filter(
    (car) =>
      // Name filtering
      car.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      // Address filtering
      car.address.toLowerCase().includes(adddressFilter.toLowerCase()) &&
      // Engine Type filtering
      car.engineType.toLowerCase().includes(engineTypeFilter.toLowerCase()) &&
      // Fuel filtering
      (fuelFilter ? car.fuel >= fuelFilter : true) &&
      // Exterior filtering
      car.exterior.toLowerCase().includes(exteriorFilter.toLowerCase()) &&
      // Interior filtering
      car.interior.toLowerCase().includes(interiorFilter.toLowerCase()) &&
      // VIN filtering
      car.vin.toLowerCase().includes(vinFilter.toLowerCase())
  );
};
