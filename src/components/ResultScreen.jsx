/* eslint-disable react/prop-types */
import Button from "./Button";
const ResultScreen = ({ text, playAgain, playClick }) => {
  return (
    <section className="flex flex-col items-center justify-evenly h-screen text-flicker-in-glow">
      <h2 className="sm:text-5xl uppercase text-3xl text-light font-extrabold underline underline-offset-8">
        {text}
      </h2>
      <div className="font-bold text-3xl">
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

export default ResultScreen;
