/* eslint-disable react/prop-types */
import Setting from "./Setting";
import Playing from "./Playing";
import Footer from "./Footer";
import LosingScreen from "./LosingScreen";
import WinningScreen from "./WinningScreen";

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
    jsxToDisplay = <LosingScreen playClick={playClick} playAgain={playAgain} />;
  else if (isDisplayWin)
    jsxToDisplay = (
      <WinningScreen playClick={playClick} playAgain={playAgain} />
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
