/* eslint-disable react/prop-types */
import Title from "./Title";
import GameName from "./GameName";
import Difficulty from "./Difficulty";

const Setting = ({
  setCurrentDifficulty,
  setIsSetting,
  playAgain,
  playClick,
}) => {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <Title />
      <GameName />
      <Difficulty
        playAgain={playAgain}
        playClick={playClick}
        setIsSetting={setIsSetting}
        setCurrentDifficulty={setCurrentDifficulty}
      />
    </main>
  );
};

export default Setting;
