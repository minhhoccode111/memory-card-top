/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Setting from "./Setting";
import Playing from "./Playing";
import ResultScreen from "./ResultScreen";

const MainPage = ({
  playTurn,
  isSoundOn,
  isMusicOn,
  bestScore,
  playAgain,
  isSetting,
  playClick,
  setIsSoundOn,
  setIsMusicOn,
  currentScore,
  isDisplayWin,
  setIsSetting,
  isDisplayLose,
  isPlayingVideo,
  isDisplayAbout,
  setIsDisplayAbout,
  setIsPlayingVideo,
  currentPokemonList,
  setCurrentDifficulty,
}) => {
  let jsxToDisplay;
  if (isSetting)
    jsxToDisplay = (
      <Setting
        playAgain={playAgain}
        playClick={playClick}
        setIsSetting={setIsSetting}
        setCurrentDifficulty={setCurrentDifficulty}
      />
    );
  else if (isDisplayLose)
    jsxToDisplay = (
      <ResultScreen
        text={"you lose!!!"}
        playClick={playClick}
        playAgain={playAgain}
      />
    );
  else if (isDisplayWin)
    jsxToDisplay = (
      <ResultScreen
        text={"you win!!!"}
        playClick={playClick}
        playAgain={playAgain}
      />
    );
  else
    jsxToDisplay = (
      <Playing
        playTurn={playTurn}
        bestScore={bestScore}
        playClick={playClick}
        setIsSetting={setIsSetting}
        currentScore={currentScore}
        currentPokemonList={currentPokemonList}
      />
    );
  return (
    <div id="wrapper" className="h-full flex flex-col">
      {jsxToDisplay}
      <Footer
        isSoundOn={isSoundOn}
        isMusicOn={isMusicOn}
        playClick={playClick}
        setIsSetting={setIsSetting}
        setIsMusicOn={setIsMusicOn}
        setIsSoundOn={setIsSoundOn}
        isPlayingVideo={isPlayingVideo}
        isDisplayAbout={isDisplayAbout}
        setIsDisplayAbout={setIsDisplayAbout}
        setIsPlayingVideo={setIsPlayingVideo}
      />
    </div>
  );
};

export default MainPage;
