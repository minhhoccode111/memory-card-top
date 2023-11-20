/* eslint-disable react/prop-types */
const DisplayScore = ({ bestScore, currentScore }) => {
  return (
    <div className="bg-darkFade text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 md:p-4 lg:p-5 mx-2 sm:mx-4 md:mx-8 lg:mx-16 text-xl sm:text-2xl md:text-3xl">
      <p className="flex items-center justify-between">
        <span>Best:</span>
        <span>{bestScore}</span>
      </p>
      <p className="flex items-center justify-between">
        <span>Score:</span>
        <span>{currentScore}</span>
      </p>
    </div>
  );
};

export default DisplayScore;
