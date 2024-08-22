import { Placemark } from 'types';

export const filterCars = (
  cars: Placemark[],
  filterText: string
): Placemark[] => {
  return cars.filter((car) =>
    car.name.toLowerCase().includes(filterText.toLowerCase())
  );
};
