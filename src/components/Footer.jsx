/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";
import Button from "./Button";
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
    <footer className="flex bg-light">
      <ToggleButton
        text={"Sound"}
        isOpen={isSoundOn}
        buttonOnClickCb={() => {
          playClick();
          setIsSoundOn(!isSoundOn);
        }}
      />
      <ToggleButton
        text={"Music"}
        isOpen={isMusicOn}
        buttonOnClickCb={() => {
          playClick();
          setIsMusicOn(!isMusicOn);
        }}
      />
      <ToggleButton
        text={"Background video"}
        isOpen={isPlayingVideo}
        buttonOnClickCb={() => {
          playClick();
          setIsPlayingVideo(!isPlayingVideo);
        }}
      />
      <ToggleButton
        text={"About"}
        isOpen={isDisplayAbout}
        buttonOnClickCb={() => {
          playClick();
          setIsDisplayAbout(!isDisplayAbout);
        }}
      />
      <Button
        text={"setting"}
        buttonOnClickCb={() => {
          playClick();
          setIsSetting(true);
        }}
      />
    </footer>
  );
};

export default Footer;
