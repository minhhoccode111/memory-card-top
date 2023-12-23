/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "./Button";
import { SetDifficultyContext } from "../App";
const Difficulty = ({ playAgain, playClick, setIsSetting }) => {
  const { setCurrentDifficulty } = useContext(SetDifficultyContext);
  return (
    <section className="flex items-center justify-between gap-4 font-bold flex-wrap">
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(6);
          setIsSetting(false);
          playClick();
          playAgain();
        }}
        text={"easy"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(10);
          setIsSetting(false);
          playClick();
          playAgain();
        }}
        text={"medium"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(16);
          setIsSetting(false);
          playClick();
          playAgain();
        }}
        text={"hard"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(24);
          setIsSetting(false);
          playClick();
          playAgain();
        }}
        text={"insane"}
      />
    </section>
  );
};

export default Difficulty;
