/* eslint-disable react/prop-types */
import Title from "./Title";
import DisplayScore from "./DisplayScore";
import { GameboardContext, SettingContext } from "../App";
import { useContext } from "react";

const Header = () => {
  const { playClick } = useContext(GameboardContext);
  const { setIsSetting } = useContext(SettingContext);
  return (
    <header className="flex items-center justify-between">
      <Title
        buttonOnClickCb={() => {
          setIsSetting(true);
          playClick();
        }}
        type={"header"}
      />
      <DisplayScore />
    </header>
  );
};

export default Header;
