/* eslint-disable react/prop-types */
import { Github } from "./Icons";
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
    <footer className="flex justify-between overflow-x-auto overflow-y-hidden">
      <div className="p-2 gap-2 sm:gap-4 sm:p-4 flex flex-col">
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
      <div className="flex">
        <div
          className={
            (isDisplayAbout ? "roll-in-bottom" : "roll-out-bottom") +
            " whitespace-nowrap text-center text-darker text-xs sm:text-sm md:text-base"
          }
        >
          <p className="px-3 mt-1 py-2 rounded-xl bg-light">
            Don&apos;t catch a Pokemon TWICE
          </p>
          <p className="px-3 mt-1 py-2 rounded-xl bg-light flex items-center justify-center gap-1">
            View{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/minhhoccode111/memory-card-top"
              className="underline underline-offset-2 hover:no-underline"
            >
              this project
            </a>{" "}
            on <Github />
          </p>
          <p className="px-3 mt-1 py-2 rounded-xl bg-light">
            Made with ❤️ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/minhhoccode111"
              className="underline underline-offset-2 hover:no-underline"
            >
              minhhoccode
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-end gap-2 p-2 sm:gap-4 sm:p-4">
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
      </div>
    </footer>
  );
};

export default Footer;
