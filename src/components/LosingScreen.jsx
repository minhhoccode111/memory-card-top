/* eslint-disable react/prop-types */
import Button from "./Button";
const LosingScreen = ({ playAgain, playClick }) => {
  return (
    <section>
      <p>You lose!</p>
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
export default LosingScreen;
