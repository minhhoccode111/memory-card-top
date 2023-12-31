/* eslint-disable react/prop-types */
export const pickItems = function inRangePickNumberOfItems(
  inRange,
  numberOfItems = 6,
) {
  if (inRange < numberOfItems || !inRange) return;
  const randomNumberArray = [];
  for (let i = 0; i < numberOfItems; i++) {
    const random = Math.floor(Math.random() * inRange);
    if (randomNumberArray.includes(random)) i--;
    else randomNumberArray.push(random);
  }
  return randomNumberArray;
};

export const shuffle = (array) => {
  for (let k = 0; k < 3; k++) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return [...array];
};
