/* eslint-disable react/prop-types */
const CurrentScore = ({ currentScore }) => {
  return <div>{currentScore}</div>;
};
const BestScore = ({ bestScore }) => {
  return <div>{bestScore}</div>;
};
const DisplayScore = ({ bestScore, currentScore }) => {
  return (
    <section>
      <BestScore bestScore={bestScore} />
      <CurrentScore currentScore={currentScore} />
    </section>
  );
};

export default DisplayScore;
