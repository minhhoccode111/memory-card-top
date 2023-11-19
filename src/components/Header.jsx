/* eslint-disable react/prop-types */
import Title from "./Title";
import DisplayScore from "./DisplayScore";

const Header = ({ bestScore, currentScore, setIsSetting }) => {
  return (
    <header className="flex items-center justify-between">
      <Title buttonOnClickCb={() => setIsSetting(true)} />
      <DisplayScore bestScore={bestScore} currentScore={currentScore} />
    </header>
  );
};

export default Header;
