/* eslint-disable react/prop-types */
import Button from "./Button";
const Difficulty = ({ setCurrentDifficulty, setIsSetting, playAgain }) => {
  return (
    <section className="">
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(6);
          setIsSetting(false);
          playAgain();
        }}
        text={"easy"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(10);
          setIsSetting(false);
          playAgain();
        }}
        text={"medium"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(16);
          setIsSetting(false);
          playAgain();
        }}
        text={"hard"}
      />
      <Button
        buttonOnClickCb={() => {
          setCurrentDifficulty(24);
          setIsSetting(false);
          playAgain();
        }}
        text={"insane"}
      />
    </section>
  );
};

export default Difficulty;
