/* eslint-disable react/prop-types */
import Button from "./Button";
const LoadingScreen = ({ canClickPlay, setIsLoading }) => {
  const JSXToDisplay = canClickPlay && (
    <div className="text-flicker-in-glow font-bold text-3xl">
      <Button text={"play"} buttonOnClickCb={() => setIsLoading(false)} />
    </div>
  );
  return (
    <div className="h-screen">
      <div className="h-3/4"></div>
      <div className="flex flex-col items-center">
        <h2 className="text-flicker-in-glow font-extrabold text-light text-6xl my-4">
          Please wait...
        </h2>
        {JSXToDisplay}
      </div>
    </div>
  );
};

export default LoadingScreen;
