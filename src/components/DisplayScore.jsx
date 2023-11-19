/* eslint-disable react/prop-types */
const DisplayScore = ({ bestScore, currentScore }) => {
  return (
    <section>
      <div>{bestScore}</div>
      <div>{currentScore}</div>
    </section>
  );
};

export default DisplayScore;
