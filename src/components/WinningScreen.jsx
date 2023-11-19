/* eslint-disable react/prop-types */
import Button from "./Button";
const WinningScreen = ({ playAgain }) => {
  return (
    <section>
      <p>You win!</p>
      <div>
        <Button text={"Play again?"} buttonOnClickCb={playAgain} />
      </div>
    </section>
  );
};

export default WinningScreen;
