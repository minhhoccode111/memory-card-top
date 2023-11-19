/* eslint-disable react/prop-types */
import Button from "./Button";
const LosingScreen = ({ playAgain }) => {
  return (
    <section>
      <p>You lose!</p>
      <div>
        <Button text={"Play again?"} buttonOnClickCb={playAgain} />
      </div>
    </section>
  );
};
export default LosingScreen;
