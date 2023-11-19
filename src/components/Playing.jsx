/* eslint-disable react/prop-types */
import Header from "./Header";
import Gameboard from "./Gameboard";

const Playing = ({
  playTurn,
  playClick,
  bestScore,
  setIsSetting,
  currentScore,
  currentPokemonList,
}) => {
  return (
    <>
      <Header
        playClick={playClick}
        bestScore={bestScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard playTurn={playTurn} currentPokemonList={currentPokemonList} />
    </>
  );
};

export default Playing;
