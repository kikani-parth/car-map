import { Placemark } from 'types';

export const sortCars = (
  cars: Placemark[],
  sortOrder: 'asc' | 'desc'
): Placemark[] => {
  return cars.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};
