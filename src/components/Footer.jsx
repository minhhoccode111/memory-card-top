/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";
const Footer = ({
  isSoundOn,

  isMusicOn,

  playClick,

  setIsSetting,

  setIsSoundOn,

  setIsMusicOn,

  isPlayingVideo,

  isDisplayAbout,

  setIsPlayingVideo,

  setIsDisplayAbout,
}) => {
  return (
    <footer className="flex justify-between">
      <div className="p-4 flex flex-col gap-4">
        <ToggleButton
          text={"sound"}
          isOpen={isSoundOn}
          buttonOnClickCb={() => {
            playClick();
            setIsSoundOn(!isSoundOn);
          }}
        />
        <ToggleButton
          text={"music"}
          isOpen={isMusicOn}
          buttonOnClickCb={() => {
            playClick();
            setIsMusicOn(!isMusicOn);
          }}
        />
        <ToggleButton
          text={"video"}
          isOpen={isPlayingVideo}
          buttonOnClickCb={() => {
            playClick();
            setIsPlayingVideo(!isPlayingVideo);
          }}
        />
      </div>
      <div className="flex flex-col justify-end gap-4 p-4">
        <ToggleButton
          text={"about"}
          isOpen={isDisplayAbout}
          buttonOnClickCb={() => {
            playClick();
            setIsDisplayAbout(!isDisplayAbout);
          }}
        />
        <ToggleButton
          text={"setting"}
          buttonOnClickCb={() => {
            playClick();
            setIsSetting(true);
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
