/* eslint-disable react/prop-types */
import Header from "./Header";
import Gameboard from "./Gameboard";

const Playing = ({ playClick, bestScore, setIsSetting, currentScore }) => {
  return (
    <>
      <Header
        playClick={playClick}
        bestScore={bestScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard />
    </>
  );
};

export default Playing;
