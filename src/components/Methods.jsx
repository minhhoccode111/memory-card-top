export const pickItems = function inRangePickNumberOfItems(
  inRange,
  numberOfItems = 24,
) {
  const randomNumberArray = [];
  for (let i = 0; i < numberOfItems; i++) {
    const random = Math.floor(Math.random() * inRange);
    if (randomNumberArray.includes(random)) i--;
    else randomNumberArray.push(random);
  }
  return randomNumberArray;
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
};
