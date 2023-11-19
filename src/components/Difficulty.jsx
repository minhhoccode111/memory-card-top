/* eslint-disable react/prop-types */
import Button from "./Button";
const Difficulty = ({ setCurrentDifficulty, setIsSetting, playAgain }) => {
  return (
    <section className="">
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(6);
        }}
        text={"easy"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(12);
        }}
        text={"medium"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(24);
        }}
        text={"hard"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(48);
        }}
        text={"insane"}
      />
    </section>
  );
};

export default Difficulty;
