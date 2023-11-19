/* eslint-disable react/prop-types */
import Header from "./Header";
import Gameboard from "./Gameboard";

const Playing = ({
  playTurn,
  bestScore,
  setIsSetting,
  currentScore,
  currentPokemonList,
}) => {
  return (
    <>
      <Header
        bestScore={bestScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard playTurn={playTurn} currentPokemonList={currentPokemonList} />
    </>
  );
};

export default Playing;
