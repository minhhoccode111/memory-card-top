/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Setting from "./Setting";
import Playing from "./Playing";
import ResultScreen from "./ResultScreen";

const MainPage = ({
  bestScore,
  isSetting,
  currentScore,
  isDisplayWin,
  isDisplayLose,
}) => {
  let jsxToDisplay;
  if (isSetting) jsxToDisplay = <Setting />;
  else if (isDisplayLose) jsxToDisplay = <ResultScreen text={"you lose!!!"} />;
  else if (isDisplayWin) jsxToDisplay = <ResultScreen text={"you win!!!"} />;
  else
    jsxToDisplay = (
      <Playing bestScore={bestScore} currentScore={currentScore} />
    );
  return (
    <div id="wrapper" className="h-full flex flex-col">
      {jsxToDisplay}
      <Footer />
    </div>
  );
};

export default MainPage;
