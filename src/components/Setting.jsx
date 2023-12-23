/* eslint-disable react/prop-types */
import Title from "./Title";
import Difficulty from "./Difficulty";

const Setting = ({ setIsSetting, playAgain, playClick }) => {
  return (
    <main className="flex relative flex-col items-center justify-center gap-12 flex-1">
      <div className="my-28">
        <Title
          buttonOnClickCb={() => console.log("Please stop clicking this title")}
        />
      </div>
      <h2 className="sm:text-5xl text-3xl text-light font-extrabold underline underline-offset-8">
        Choose difficulty
      </h2>
      <Difficulty
        playAgain={playAgain}
        playClick={playClick}
        setIsSetting={setIsSetting}
      />
    </main>
  );
};

export default Setting;
