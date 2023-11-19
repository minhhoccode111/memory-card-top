/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";
const Footer = ({
  isSoundOn,
  isMusicOn,
  setIsSoundOn,
  setIsMusicOn,
  isPlayingVideo,
  isDisplayAbout,
  setIsPlayingVideo,
  setIsDisplayAbout,
}) => {
  return (
    <footer className="flex">
      <ToggleButton
        text={"Sound"}
        isOpen={isSoundOn}
        buttonOnClickCb={() => setIsSoundOn(!isSoundOn)}
      />
      <ToggleButton
        text={"Music"}
        isOpen={isMusicOn}
        buttonOnClickCb={() => setIsMusicOn(!isMusicOn)}
      />
      <ToggleButton
        text={"Background video"}
        isOpen={isPlayingVideo}
        buttonOnClickCb={() => setIsPlayingVideo(!isPlayingVideo)}
      />
      <ToggleButton
        text={"About"}
        isOpen={isDisplayAbout}
        buttonOnClickCb={() => setIsDisplayAbout(!isDisplayAbout)}
      />
    </footer>
  );
};

export default Footer;
