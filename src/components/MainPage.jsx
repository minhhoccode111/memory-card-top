/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Setting from "./Setting";
import Playing from "./Playing";
import ResultScreen from "./ResultScreen";

const MainPage = ({
  isSoundOn,
  isMusicOn,
  bestScore,
  isSetting,
  setIsSoundOn,
  setIsMusicOn,
  currentScore,
  isDisplayWin,
  setIsSetting,
  isDisplayLose,
}) => {
  let jsxToDisplay;
  if (isSetting) jsxToDisplay = <Setting setIsSetting={setIsSetting} />;
  else if (isDisplayLose) jsxToDisplay = <ResultScreen text={"you lose!!!"} />;
  else if (isDisplayWin) jsxToDisplay = <ResultScreen text={"you win!!!"} />;
  else
    jsxToDisplay = (
      <Playing
        bestScore={bestScore}
        playClick={playClick}
        setIsSetting={setIsSetting}
        currentScore={currentScore}
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
      />
    </div>
  );
};

export default MainPage;
