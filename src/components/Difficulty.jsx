/* eslint-disable react/prop-types */
import Button from "./Button";
const Difficulty = ({
  playAgain,
  playClick,
  setIsSetting,
  setCurrentDifficulty,
}) => {
  return (
    <section className="">
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
