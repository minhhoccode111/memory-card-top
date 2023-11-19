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
        setIsSetting={setIsSetting}
        setCurrentDifficulty={setCurrentDifficulty}
      />
    );
  else if (isDisplayLose) jsxToDisplay = <LosingScreen playAgain={playAgain} />;
  else if (isDisplayWin) jsxToDisplay = <WinningScreen playAgain={playAgain} />;
  else
    jsxToDisplay = (
      <Playing
        playTurn={playTurn}
        bestScore={bestScore}
        setIsSetting={setIsSetting}
        currentScore={currentScore}
        currentPokemonList={currentPokemonList}
      />
    );
  return (
    <div id="wrapper" className="h-screen bg-slate-700 flex flex-col">
      {jsxToDisplay}
      <Footer
        isSoundOn={isSoundOn}
        isMusicOn={isMusicOn}
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
