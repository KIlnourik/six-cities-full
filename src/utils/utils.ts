export const getRandomItems = <T>(item: T, length: number): T[] => {
  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(item);
  }
  return items;
};

export const getRating = (rating:number): number => (Math.round(rating) * 20);
