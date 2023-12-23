/* eslint-disable react/prop-types */
import Title from "./Title";
import DisplayScore from "./DisplayScore";
import { GameboardContext } from "../App";
import { useContext } from "react";

const Header = ({ bestScore, currentScore, setIsSetting }) => {
  const { playClick } = useContext(GameboardContext);
  return (
    <header className="flex items-center justify-between">
      <Title
        buttonOnClickCb={() => {
          setIsSetting(true);
          playClick();
        }}
        type={"header"}
      />
      <DisplayScore bestScore={bestScore} currentScore={currentScore} />
    </header>
  );
};

export default Header;
