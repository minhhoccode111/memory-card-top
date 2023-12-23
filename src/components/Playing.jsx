/* eslint-disable react/prop-types */
import Header from "./Header";
import Gameboard from "./Gameboard";

const Playing = ({ bestScore, currentScore }) => {
  return (
    <>
      <Header bestScore={bestScore} currentScore={currentScore} />
      <Gameboard />
    </>
  );
};

export default Playing;
