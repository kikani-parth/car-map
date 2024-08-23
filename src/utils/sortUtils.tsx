import { Placemark } from 'types';

export const sortCars = (
  cars: Placemark[],
  sortOrder: 'asc' | 'desc',
  sortBy: 'name' | 'fuel' = 'name' // Default to sorting by name
): Placemark[] => {
  return cars.sort((a, b) => {
    if (sortBy === 'fuel') {
      if (sortOrder === 'asc') {
        return a.fuel === b.fuel
          ? a.name.localeCompare(b.name)
          : a.fuel - b.fuel;
      } else {
        // sortOrder === desc
        return b.fuel === a.fuel
          ? b.name.localeCompare(a.name)
          : b.fuel - a.fuel;
      }
    } else {
      // Default sorting by name
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    }
  });
};
