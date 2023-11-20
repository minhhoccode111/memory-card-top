/* eslint-disable react/prop-types */
import {
  Play,
  Pause,
  Close,
  MusicOn,
  SoundOn,
  Setting,
  Question,
  MusicOff,
  SoundOff,
} from "./Icons";
const ToggleButton = ({ text, isOpen, buttonOnClickCb }) => {
  const title = "button to toggle" + " " + text;
  if (text === "sound") {
    if (isOpen) text = <SoundOn />;
    else text = <SoundOff />;
  }
  if (text === "music") {
    if (isOpen) text = <MusicOn />;
    else text = <MusicOff />;
  }
  if (text === "video") {
    if (isOpen) text = <Pause />;
    else text = <Play />;
  }
  if (text === "about") {
    if (isOpen) text = <Close />;
    else text = <Question />;
  }
  if (text === "setting") text = <Setting />;

  return (
    <div className="grid place-items-center rounded-full w-10 h-10 bg-light hover:scale-110 transition-transform">
      <button
        type="button"
        title={title}
        onClick={buttonOnClickCb}
        className="h-full w-full grid place-items-center"
      >
        {text}
      </button>
    </div>
  );
};

export default ToggleButton;
