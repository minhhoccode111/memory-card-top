/* eslint-disable react/prop-types */
import Header from "./Header";
import Gameboard from "./Gameboard";

const Playing = ({ bestScore, setIsSetting, currentScore }) => {
  return (
    <>
      <Header
        bestScore={bestScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard />
    </>
  );
};

export default Playing;
