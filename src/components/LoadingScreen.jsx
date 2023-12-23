/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import Button from "./Button";

const LoadingScreen = ({
  playClick,
  isMusicOn,
  setIsLoading,
  setIsMusicOn,
}) => {
  const [canClickPlay, _setCanClickPlay] = useState(false);
  useEffect(() => {
    setTimeout(() => _setCanClickPlay(true), 2500);
  }, []);
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
      <div className="fixed bottom-2 left-2">
        <ToggleButton
          text={"music"}
          isOpen={isMusicOn}
          buttonOnClickCb={() => {
            playClick();
            setIsMusicOn(!isMusicOn);
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
