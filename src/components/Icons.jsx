/* eslint-disable react/prop-types */
import Artwork from "./../assets/image/pokemon-artwork.png";

const normal = {
  width: "30px",
  height: "30px",
  color: "#152A55",
};

const smaller = {
  width: "20px",
  height: "20px",
  color: "#152A55",
};

export const Pokemon = (props) => {
  const styles = {
    display: "block",
    width: "100%",
  };
  return (
    <div className={"aspect-3/1"} {...props}>
      <img
        src={Artwork}
        alt="Pokemon art work"
        style={styles}
        className="aspect-3/1 object-cover object-center"
      />
    </div>
  );
};

export const Github = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
    ></path>
  </svg>
);

export const Play = (props) => {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill={props.color}
        d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z"
      ></path>
    </svg>
  );
};

export const Pause = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"
    ></path>
  </svg>
);

export const Setting = (props) => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8c-21.1 21.2-32.8 49.2-32.8 79.1c0 29.9 11.7 57.9 32.8 79.1c21.2 21.1 49.2 32.8 79.1 32.8c29.9 0 57.9-11.7 79.1-32.8c21.1-21.2 32.8-49.2 32.8-79.1c0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57c0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8s175.8 78.7 175.8 175.8s-78.7 175.8-175.8 175.8z"
    ></path>
  </svg>
);

export const SoundOn = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={props.color} strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 7.5S21 9 21 11.5s-1.5 4-1.5 4"
      ></path>
      <path d="M2 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H4a2 2 0 0 1-2-2Z"></path>
    </g>
  </svg>
);
export const SoundOff = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={props.color} strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2"
      ></path>
      <path d="M2 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H4a2 2 0 0 1-2-2Z"></path>
    </g>
  </svg>
);

export const MusicOn = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M333.782 80c128 64 128 288 0 352c192-64 192-288 0-352zm-48 16c64 50.843 64 270.217 0 321.06c128-50.843 128-270.217 0-321.06zm-75.13 49.922c-35.468.215-70.268 6.618-89.253 14.863c-14.084 43.136-16.33 127.919-6.736 180.518c-8.452-4.265-18.337-6.543-28.445-6.555c-28.719 0-52 17.909-52 40s23.281 40 52 40s52-17.909 52-40c-6.166-49.187-13.74-115.12-8.225-165.437c37.756-7.722 77.49-17.422 114.688-10.715c-4.152 38.294-3.029 82.424 3.379 117.552c-8.452-4.265-18.337-6.543-28.446-6.554c-28.719 0-52 17.908-52 40c0 22.091 23.281 40 52 40c28.72 0 52-17.909 52-40c-4.618-72.485-18.78-132.767.33-196.436c-18.491-5.267-40.012-7.365-61.293-7.236zm5.456 15.635c11.697-.073 23.313.706 34.174 2.558c-1.185 5.199-2.232 10.67-3.156 16.336c-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666z"
    ></path>
  </svg>
);
export const MusicOff = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M210.652 145.922c-35.467.215-70.267 6.618-89.252 14.863c-14.085 43.136-16.33 127.919-6.736 180.518c-8.452-4.265-18.339-6.543-28.447-6.555c-28.719 0-52 17.909-52 40s23.281 40 52 40s52.002-17.909 52.002-40c-6.166-49.187-13.74-115.12-8.225-165.437c37.756-7.722 77.49-17.422 114.688-10.715c-4.152 38.294-3.03 82.424 3.377 117.552c-8.452-4.265-18.335-6.543-28.444-6.554c-28.719 0-52 17.908-52 40c0 22.091 23.281 40 52 40s52-17.909 52-40c-4.618-72.485-18.78-132.767.33-196.436c-18.492-5.267-40.012-7.365-61.293-7.236zm5.457 15.635c11.697-.073 23.313.706 34.174 2.558c-1.185 5.199-2.232 10.67-3.156 16.336c-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666zm116.62 17.714L307.27 204.73L358.543 256l-51.272 51.271l25.458 25.458L384 281.457l51.271 51.272l25.458-25.458L409.457 256l51.272-51.271l-25.458-25.458L384 230.543l-51.271-51.272z"
    ></path>
  </svg>
);
export const Question = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1a1.503 1.503 0 0 1 1.3-.75a1.5 1.5 0 1 1 0 3h-.003a.95.95 0 0 0-.19.039a1.032 1.032 0 0 0-.198.04a.983.983 0 0 0-.155.105a1.008 1.008 0 0 0-.162.11a1.005 1.005 0 0 0-.117.174a.978.978 0 0 0-.097.144a1.023 1.023 0 0 0-.043.212a.948.948 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.494 3.494 0 0 0 15.333 9.5Zm-4.203 6.79a1 1 0 0 0 .7 1.71a1.036 1.036 0 0 0 .71-.29a1.015 1.015 0 0 0 0-1.42a1.034 1.034 0 0 0-1.41 0Z"
    ></path>
  </svg>
);
export const Close = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
    ></path>
  </svg>
);
export const Heart = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
    ></path>
  </svg>
);

Github.defaultProps = smaller;
Play.defaultProps = smaller;
Pause.defaultProps = normal;
Setting.defaultProps = smaller;
SoundOn.defaultProps = smaller;
SoundOff.defaultProps = smaller;
MusicOn.defaultProps = normal;
MusicOff.defaultProps = normal;
Question.defaultProps = normal;
Close.defaultProps = normal;
Heart.defaultProps = normal;
