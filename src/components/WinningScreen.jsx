/* eslint-disable react/prop-types */
import Button from "./Button";
const WinningScreen = ({ playAgain, playClick }) => {
  return (
    <section>
      <p>You win!</p>
      <div>
        <Button
          text={"Play again?"}
          buttonOnClickCb={() => {
            playAgain();
            playClick();
          }}
        />
      </div>
    </section>
  );
};

export default WinningScreen;
